const inquirer = require('inquirer');
const client = require('./db');
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

// Connect to database
const pool = new Pool(
  {
    // TODO: Enter PostgreSQL username
    user: 'postgres',
    // TODO: Enter PostgreSQL password
    password: 'swag',
    host: 'localhost',
    database: 'employees_db',
  },
  console.log(`Connected to the employees_db database.`)
);

pool.connect();
