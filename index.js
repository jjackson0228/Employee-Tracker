// index.js
const inquirer = require('inquirer');
const pool = require('./db');
const path = require('path');
const fs = require('fs');
const cTable = require('console.table');

// Function to read SQL file and return queries
const readSQLFile = (filePath) => {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return fileContents.split(';').filter((query) => query.trim());
};

// Function to query the database
const queryDatabase = async (query, params = []) => {
  const result = await pool.query(query, params);
  return result.rows;
};

// Read queries from query.sql
const queries = readSQLFile(path.join(__dirname, 'query.sql'));

// Function to view all departments
const viewDepartments = async () => {
  const departments = await queryDatabase(queries[0]);
  console.table(departments);
};

// Function to view all roles
const viewRoles = async () => {
  const roles = await queryDatabase(queries[1]);
  console.table(roles);
};

// Function to view all employees
const viewEmployees = async () => {
  const employees = await queryDatabase(queries[2]);
  console.table(employees);
};

// Function to add a department
const addDepartment = async () => {
  const { name } = await inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'Enter the department name:',
  });
  await queryDatabase('INSERT INTO department (name) VALUES ($1)', [name]);
  console.log('Department added successfully.');
};

// Function to add a role
const addRole = async () => {
  const departments = await queryDatabase('SELECT id, name FROM department');
  const { title, salary, department_id } = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the role title:',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the salary:',
    },
    {
      type: 'list',
      name: 'department_id',
      message: 'Select the department for the role:',
      choices: departments.map((dep) => ({ name: dep.name, value: dep.id })),
    },
  ]);
  await queryDatabase(
    'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)',
    [title, salary, department_id]
  );
  console.log('Role added successfully.');
};

// Function to add an employee
const addEmployee = async () => {
  const roles = await queryDatabase('SELECT id, title FROM role');
  const managers = await queryDatabase(
    "SELECT id, CONCAT(first_name, ' ', last_name) AS name FROM employee"
  );

  const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Enter the employee’s first name:',
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Enter the employee’s last name:',
    },
    {
      type: 'list',
      name: 'role_id',
      message: 'Select the employee’s role:',
      choices: roles.map((role) => ({ name: role.title, value: role.id })),
    },
    {
      type: 'list',
      name: 'manager_id',
      message: 'Select the employee’s manager (or leave blank if none):',
      choices: [...managers, { name: 'None', value: null }],
    },
  ]);
  await queryDatabase(
    'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
    [first_name, last_name, role_id, manager_id]
  );
  console.log('Employee added successfully.');
};

// Function to update an employee’s role
const updateEmployeeRole = async () => {
  const employees = await queryDatabase(
    "SELECT id, CONCAT(first_name, ' ', last_name) AS name FROM employee"
  );
  const roles = await queryDatabase('SELECT id, title FROM role');

  const { employee_id, role_id } = await inquirer.prompt([
    {
      type: 'list',
      name: 'employee_id',
      message: 'Select the employee to update:',
      choices: employees.map((emp) => ({ name: emp.name, value: emp.id })),
    },
    {
      type: 'list',
      name: 'role_id',
      message: 'Select the new role for the employee:',
      choices: roles.map((role) => ({ name: role.title, value: role.id })),
    },
  ]);

  await queryDatabase('UPDATE employee SET role_id = $1 WHERE id = $2', [
    role_id,
    employee_id,
  ]);
  console.log('Employee role updated successfully.');
};

// Main function to display menu and handle user input
const main = async () => {
  const { action } = await inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
      'Exit',
    ],
  });

  switch (action) {
    case 'View all departments':
      await viewDepartments();
      break;
    case 'View all roles':
      await viewRoles();
      break;
    case 'View all employees':
      await viewEmployees();
      break;
    case 'Add a department':
      await addDepartment();
      break;
    case 'Add a role':
      await addRole();
      break;
    case 'Add an employee':
      await addEmployee();
      break;
    case 'Update an employee role':
      await updateEmployeeRole();
      break;
    case 'Exit':
      console.log('Exiting...');
      pool.end();
      return;
  }

  // Prompt again after performing an action
  await main();
};

// Start the application
main();
