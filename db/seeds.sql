INSERT INTO department (name)
VALUES  ('Store Managers'),
        ('Sales'),
        ('Repairs'),
        ('Electric Guitars'),
        ('Drums'),
        ('Audio Equipment'),
        ('Bass Guitars'),
        ('Acoustic Guitars'),
        ('Lessons');

INSERT INTO role (title, salary, department_id)
VALUES  
        -- Store Manager  
        ('Store Manager', 100000 (SELECT id FROM department WHERE name = 'Store Managers')),
        ('Assistant Store Manager', 80000, (SELECT id FROM department WHERE name = 'Store Managers')),

        -- Sales Department 
        ('Sales Associate', 40000, (SELECT id FROM department WHERE name = 'Sales')),
        ('Sales Manager', 60000, (SELECT id FROM department WHERE name = 'Sales')),

        -- Repairs Department
        ('Technician', 45000, (SELECT id FROM department WHERE name = 'Repairs')),
        ('Repair Manager', 55000, (SELECT id FROM department WHERE name = 'Repairs')),

        -- Electric Guitars Department 
        ('Electric Guitar Specialist', 42000, (SELECT id FROM department WHERE name = 'Electric Guitars')),
        ('Electric Guitar Manager', 55000, (SELECT id FROM department WHERE name = 'Electric Guitars')),

        -- Drums Department 
        ('Drum Specialist', 40000, (SELECT id FROM department WHERE name = 'Drums')),
        ('Drum Manager', 55000, (SELECT id FROM department WHERE name = 'Drums')),
         
          -- Audio Equipment Department 
        ('Audio Equipment Specialist', 45000, (SELECT id FROM department WHERE name = 'Audio Equipment')),
        ('Audio Equipment Manager', 55000, (SELECT id FROM department WHERE name = 'Audio Equipment')),

        -- Bass Guitars Department 
        ('Bass Guitar Specialist', 42000, (SELECT id FROM department WHERE name = 'Bass Guitars')),
        ('Bass Guitar Manager', 55000, (SELECT id FROM department WHERE name = 'Bass Guitars')),

        -- Acoustic Guitars Department 
        ('Acoustic Guitar Specialist', 42000, (SELECT id FROM department WHERE name = 'Acoustic Guitars')),
        ('Acoustic Guitar Manager', 55000, (SELECT id FROM department WHERE name = 'Acoustic Guitars')),

         -- Lessons Department 
        ('Guitar Instructor', 45000, (SELECT id FROM department WHERE name = 'Lessons')),
        ('Acoustic Instructor', 45000, (SELECT id FROM department WHERE name = 'Lessons'))
        ('Drum Instructor', 45000, (SELECT id FROM department WHERE name = 'Lessons'));