INSERT INTO department (name)
VALUES 
        ('Sales'), --Department 1 
        ('Repairs'), --Department 2
        ('Instruments'), --Department 3
        ('Audio Equipment'), --Department 4
        ('Lessons'); --Department 5

INSERT INTO role (title, salary, department_id)
VALUES  ('Sales Manager',60000,1), -- Role in Department 1 (Sales)
        ('Sales Specialist',45000,1), -- Role in Department 1 (Sales)
        ('Sales Associate',35000,1), -- Role in Department 1 (Sales)
        ('Repairs Manager',55000,2),  -- Role in Department 2 (Repairs)
        ('Repairs Specialist',40000,2),  -- Role in Department 2 (Repairs)
        ('Repairs Technician',35000,2),  -- Role in Department 2 (Repairs)
        ('Instruments Manager',70000,3), -- Role in Department 3 (Instruments)
        ('Instruments Specialist',55000,3), -- Role in Department 3 (Instruments)
        ('Instruments Associate',40000,3), -- Role in Department 3 (Instruments)
        ('Audio Equipment Manager',70000,4), -- Role in Department 4 (Audio Equipment)
        ('Audio Equipment Specialist',63000,4), -- Role in Department 4 (Audio Equipment)
        ('Audio Equipment Associate',42000,4), -- Role in Department 4 (Audio Equipment)
        ('Lessons Manager',60000,5), -- Role in Department 5 (Lessons)
        ('Lessons Instructor',40000,5), -- Role in Department 5 (Lessons)
        ('Lessons Coordinator',50000,5); -- Role in Department 5 (Lessons)

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES   ('Jimmy', 'John', 1, 1),   -- Sales Manager, 
    ('Sarah', 'Connor', 2, NULL),    -- Sales Specialist, reports to Sales Manager
    ('Alex', 'Smith', 3, NULL),      -- Sales Associate, reports to Sales Specialist
    ('Mike', 'Ross', 4, 2,    -- Repairs Manager, 
    ('Jane', 'Doe', 5, NULL),        -- Repairs Specialist, reports to Repairs Manager
    ('John', 'Doe', 6, NULL),        -- Repairs Technician, reports to Repairs Specialist
    ('Chris', 'Evans', 7, 3),  -- Instruments Manager, 
    ('Bruce', 'Wayne', 8, NULL),     -- Instruments Specialist, reports to Instruments Manager
    ('Clark', 'Kent', 9, NULL),      -- Instruments Associate, reports to Instruments Specialist
    ('Tony', 'Stark', 10, 4),  -- Audio Equipment Manager, 
    ('Natasha', 'Romanoff', 11, NULL), -- Audio Equipment Specialist, reports to Audio Equipment Manager
    ('Steve', 'Rogers', 12, NULL),  -- Audio Equipment Associate, reports to Audio Equipment Specialist
    ('Peter', 'Parker', 13, 5),-- Lessons Manager, 
    ('Diana', 'Prince', 14, NULL),  -- Lessons Instructor, reports to Lessons Manager
    ('Barry', 'Allen', 15, NULL);   -- Lessons Coordinator, reports to Lessons Manager