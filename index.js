// index.js
const inquirer = require('inquirer');
const pool = require('./db');

// Function to view all departments
async function viewDepartments() {
  try {
    const res = await pool.query('SELECT * FROM department');
    console.table(res.rows);
  } catch (err) {
    console.error(err);
  }
}

// Function to view all roles
async function viewRoles() {
  try {
    const res = await pool.query(`
      SELECT role.id, role.title, role.salary, department.name AS department 
      FROM role
      JOIN department ON role.department_id = department.id
    `);
    console.table(res.rows);
  } catch (err) {
    console.error(err);
  }
}
