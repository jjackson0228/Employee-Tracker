//db.js
const { Pool } = require('pg');

// Connect to database
const pool = new Pool({
  // Enter PostgreSQL username, password, host, database, and port
  user: 'postgres',
  password: 'swag',
  host: 'localhost',
  database: 'employees_db',
  port: 5432,
});

// Log connection success
pool
  .connect()
  .then(() => console.log('Connected to the employees_db database.'))
  .catch((err) => console.error('Connection error', err.stack));

module.exports = pool;
