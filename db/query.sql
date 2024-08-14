-- Query to get all departments
SELECT * FROM department;

-- Query to get all roles with department names
SELECT role.id, role.title, role.salary, department.name AS department
FROM role
JOIN department ON role.department_id = department.id;

-- Query to get all employees with roles and managers
SELECT e.id, e.first_name, e.last_name, role.title AS role, department.name AS department, role.salary, 
CONCAT(m.first_name, ' ', m.last_name) AS manager
FROM employee e
JOIN role ON e.role_id = role.id
JOIN department ON role.department_id = department.id
LEFT JOIN employee m ON e.manager_id = m.id;