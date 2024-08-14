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

INSERT INTO roles (title, salary, department_id)
VALUES  
    -- Store Manager Department (id = 1)    
        ('Store Manager', 100000, 1),
        ('Assistant Store Manager', 80000, 1),


    -- Sales Department (id = 2)
        ('Sales Associate', 40000, 2),
        ('Sales Manager', 60000, 2),

        -- Repairs Department (id = 3)
        ('Technician', 45000, 3),
        ('Repair Manager', 55000, 3),

        -- Electric Guitars Department (id = 4)
        ('Electric Guitar Specialist', 42000, 4),
        ('Electric Guitar Manager', 55000, 4),

        -- Drums Department (id = 5)
        ('Drum Specialist', 40000, 5),
        ('Drum Manager', 55000, 5),
         
          -- Audio Equipment Department (id = 6)
        ('Audio Equipment Specialist', 45000, 6),
        ('Audio Equipment Manager', 55000, 6),

        -- Bass Guitars Department (id = 7)
        ('Bass Guitar Specialist', 42000, 7),
        ('Bass Guitar Manager', 55000, 7),

        -- Acoustic Guitars Department (id = 8)
        ('Acoustic Guitar Specialist', 42000, 8),
        ('Acoustic Guitar Manager', 55000, 8),

         -- Lessons Department (id = 9)
        ('Guitar Instructor', 45000, 9),
        ('Acoustic Instructor', 45000, 9)
        ('Drum Instructor', 45000, 9);