DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

\c employees_db;

CREATE TABLE department (
  id SERIAL PRIMARY KEY, -- Auto-incrementing primary key
  name VARCHAR(30) UNIQUE NOT NULL -- Department name, must be unique and not null
);

CREATE TABLE role (
    id SERIAL PRIMARY KEY, -- Auto-incrementing primary key
    title VARCHAR(30) UNIQUE NOT NULL,-- Role title, must be unique and not null
    salary DECIMAL NOT NULL, -- Role salary, must be a decimal value and not null
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id)
     REFERENCES department(id) -- Foreign key referencing department(id)
     ON DELETE SET NULL
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY, -- Auto-incrementing primary key
    first_name VARCHAR(30) NOT NULL,   -- Employee's first name, not null
    last_name VARCHAR(30) NOT NULL,-- Employee's last name, not null
    role_id INTEGER NOT NULL,
    FOREIGN KEY (role_id)
      REFERENCES role(id),-- Foreign key referencing role(id)
    manager_id INTEGER,
    FOREIGN KEY (manager_id)
      REFERENCES employee(id) -- Self-referencing foreign key for the employee's manager
);
