INSERT INTO department (name)
VALUES 
        ('Sales'), --Department 1 
        ('Repairs'), --Department 2
        ('Instruments'), --Department 3
        ('Audio Equipment') --Department 4
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
VALUES   ('Jimmy', 'John', 1, NULL),   -- Sales Manager, no manager
    ('Sarah', 'Connor', 2, 1),    -- Sales Specialist, reports to Sales Manager
    ('Alex', 'Smith', 3, 2),      -- Sales Associate, reports to Sales Specialist
    ('Mike', 'Ross', 4, NULL),    -- Repairs Manager, no manager
    ('Jane', 'Doe', 5, 4),        -- Repairs Specialist, reports to Repairs Manager
    ('John', 'Doe', 6, 5),        -- Repairs Technician, reports to Repairs Specialist
    ('Chris', 'Evans', 7, NULL),  -- Instruments Manager, no manager
    ('Bruce', 'Wayne', 8, 7),     -- Instruments Specialist, reports to Instruments Manager
    ('Clark', 'Kent', 9, 8),      -- Instruments Associate, reports to Instruments Specialist
    ('Tony', 'Stark', 10, NULL),  -- Audio Equipment Manager, no manager
    ('Natasha', 'Romanoff', 11, 10), -- Audio Equipment Specialist, reports to Audio Equipment Manager
    ('Steve', 'Rogers', 12, 11),  -- Audio Equipment Associate, reports to Audio Equipment Specialist
    ('Peter', 'Parker', 13, NULL),-- Lessons Manager, no manager
    ('Diana', 'Prince', 14, 13),  -- Lessons Instructor, reports to Lessons Manager
    ('Barry', 'Allen', 15, 13);   -- Lessons Coordinator, reports to Lessons Manager