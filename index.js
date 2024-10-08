// index.js
const inquirer = require('inquirer');
const pool = require('./db');
const path = require('path');
const fs = require('fs');
const cTable = require('console.table');

// Function to read SQL file and return queries
const readSQLFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading SQL file:', err);
        reject(err);
      } else {
        resolve(data.split(';').filter((query) => query.trim()));
      }
    });
  });
};

// Function to query the database
const queryDatabase = async (query, params = []) => {
  try {
    const result = await pool.query(query, params);
    return result.rows;
  } catch (err) {
    console.error('Database query error:', err);
    throw err;
  }
};

// Load queries from query.sql
let queries = [];
const loadQueries = async () => {
  try {
    queries = await readSQLFile(path.join(__dirname, 'db', 'query.sql'));
  } catch (err) {
    console.error('Failed to load SQL queries:', err);
    process.exit(1); // Exit if there's an error loading queries
  }
};

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
      choices: [
        ...managers.map((manager) => ({
          name: manager.name,
          value: manager.id,
        })),
        { name: 'None', value: null },
      ],
    },
  ]);
  await queryDatabase(
    'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
    [first_name, last_name, role_id, manager_id]
  );
  console.log('Employee added successfully.');
};
//function to view all employees and their managers
const viewEmployeesByManager = async () => {
  const managers = await queryDatabase(
    "SELECT id, CONCAT(first_name, ' ', last_name) AS name FROM employee WHERE id IN (SELECT DISTINCT manager_id FROM employee WHERE manager_id IS NOT NULL)"
  );

  for (const manager of managers) {
    console.log(`\nManager: ${manager.name}`);
    const employees = await queryDatabase(
      "SELECT CONCAT(first_name, ' ', last_name) AS name FROM employee WHERE manager_id = $1",
      [manager.id]
    );
    console.table(employees);
  }
};
// function to view all the employees in a department table
const viewEmployeesByDepartment = async () => {
  const departments = await queryDatabase('SELECT id, name FROM department');

  for (const department of departments) {
    console.log(`\nDepartment: ${department.name}`);
    const employees = await queryDatabase(
      "SELECT CONCAT(first_name, ' ', last_name) AS name FROM employee INNER JOIN role ON employee.role_id = role.id WHERE role.department_id = $1",
      [department.id]
    );
    console.table(employees);
  }
};
//function to view a departments budget total of all employees in department
const viewDepartmentBudget = async () => {
  const departments = await queryDatabase('SELECT id, name FROM department');
  const { department_id } = await inquirer.prompt({
    type: 'list',
    name: 'department_id',
    message: 'Select the department to view its total budget:',
    choices: departments.map((dep) => ({ name: dep.name, value: dep.id })),
  });

  const totalSalary = await queryDatabase(
    'SELECT SUM(salary) AS budget FROM role INNER JOIN employee ON role.id = employee.role_id WHERE role.department_id = $1',
    [department_id]
  );

  console.log(
    `Total Utilized Budget for ${
      departments.find((d) => d.id === department_id).name
    }: $${totalSalary[0].budget}`
  );
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
  await loadQueries(); // Ensure queries are loaded before proceeding
  //command prompt to choose changes or checks that user wants to make in the database
  const { action } = await inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'View employees by manager',
      'View employees by department',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
      'View the total utilized budget of a department',
      'Exit',
    ],
  });
  //calls all actions to update the functions
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
    case 'View employees by manager':
      await viewEmployeesByManager();
      break;
    case 'View employees by department':
      await viewEmployeesByDepartment();
      break;
    case 'View the total utilized budget of a department':
      await viewDepartmentBudget();
      break;
    case 'Exit':
      console.log('Exiting...');
      await pool.end();
      return;
  }

  // Prompt again after performing an action
  await main();
};

// Start the application
main();
