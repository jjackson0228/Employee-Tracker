const inquirer = require('inquirer');
const client = require('./db');
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();
