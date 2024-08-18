DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

\c employees_db;

CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL --To hold department name 
);

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,--hold role title
    salary DECIMAL NOT NULL, -- hold role salary
    department_id INTEGER NOT NULL department(id)
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, --hold employee first name
    last_name VARCHAR(30) NOT NULL, --hold employee last name
    role_id INTEGER NOT NULL role(id),--hold reference to employee role
    manager_id INTEGER employee(id)
);