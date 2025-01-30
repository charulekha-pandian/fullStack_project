CREATE DATABASE training_placement_tracker2;
use training_placement_tracker2;


CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(255),
    role ENUM('student', 'faculty','admin') NOT NULL
);

RENAME TABLE users TO login;
ALTER TABLE login ADD CONSTRAINT UNIQUE (email);
SELECT * FROM login;

CREATE TABLE updation_form (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    roll_no VARCHAR(50) NOT NULL,
    department VARCHAR(100) NOT NULL,
    updation_for VARCHAR(100) NOT NULL,
    percentage VARCHAR(10) NOT NULL,
    self_rating INT CHECK (self_rating BETWEEN 1 AND 10),
    certificate_image BLOB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,  -- Added email field
    roll_no VARCHAR(50) UNIQUE NOT NULL,
    department VARCHAR(100) NOT NULL,
    cgpa FLOAT CHECK (cgpa BETWEEN 0 AND 10),
    skills JSON,  -- Optional, depending on your design choice
    FOREIGN KEY (email) REFERENCES login(email) ON DELETE CASCADE  -- Linking email to login table
);

CREATE TABLE faculty_verifications (
    updation_form_id INT NOT NULL,
    faculty_id INT NOT NULL,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    remarks TEXT,
    verified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (updation_form_id) REFERENCES updation_form(id) ON DELETE CASCADE
);

-- CREATE VIEW admin_view AS
-- SELECT  
--     s.name AS student_name,
--     s.roll_no AS student_roll_no,
--     s.department AS student_department,
--     s.cgpa AS student_cgpa,
--     JSON_UNQUOTE(skill.skill_name) AS skill_name,
--     JSON_UNQUOTE(skill.rating) AS skill_rating
-- FROM students s,
--      JSON_TABLE(
--          s.skills, 
--          '$[*]' 
--          COLUMNS (
--              skill_name VARCHAR(100) PATH '$.skill_name',
--              rating INT PATH '$.rating'
--          )
--      ) AS skill;

CREATE VIEW admin_view AS
SELECT
    s.name AS student_name,
    s.roll_no AS student_roll_no,
    s.department AS student_department,
    s.cgpa AS student_cgpa,
    JSON_UNQUOTE(JSON_EXTRACT(s.skills, '$[0].skill_name')) AS skill_name_1,
    JSON_UNQUOTE(JSON_EXTRACT(s.skills, '$[0].rating')) AS skill_rating_1,
    JSON_UNQUOTE(JSON_EXTRACT(s.skills, '$[1].skill_name')) AS skill_name_2,
    JSON_UNQUOTE(JSON_EXTRACT(s.skills, '$[1].rating')) AS skill_rating_2
FROM students s;

     
SELECT VERSION();


     
SELECT * FROM admin_view;

use training_placement_tracker2;
INSERT INTO login (name, email, password, role) VALUES
('Abi', 'abi@example.com', 'password123', 'student'),
('Samuel', 'samuel@example.com', 'password123', 'faculty'),
('Admin User', 'admin@example.com', 'adminpass', 'admin');


UPDATE login
SET email = 'abi@bitsathy.ac.in'
WHERE email = 'abi@example.com';

INSERT INTO login (name, email, password, role) VALUES
('Saran','saran@bitsathy.ac.in','password123','student');


INSERT INTO students (name, email, roll_no, department, cgpa, skills) VALUES
('Abi', 'abi@bitsathy.ac.in', '22CS128', 'Computer Science', 8.96, 
    '[{"skill_name": "Java", "rating": 8}, {"skill_name": "DSA", "rating": 7}]'),
('Saran', 'saran@bitsathy.ac.in', '221EE200', 'Electrical Engineering', 8.7, 
    '[{"skill_name": "MATLAB", "rating": 7}, {"skill_name": "Embedded Systems", "rating": 8}]');

INSERT INTO updation_form (name, roll_no, department, updation_for, percentage, self_rating, certificate_image) VALUES
('Abi', '221CS128', 'Computer Science', 'Group Discussion', '90%', 9, NULL),
('Saran', '221EE200', 'Electrical Engineering', 'Internship', '85%', 8, NULL);

INSERT INTO faculty_verifications (updation_form_id, faculty_id, status, remarks) VALUES
(1, 203, 'approved', 'Good performance in Group Discussion'),
(2, 310, 'pending', NULL);

-- Retrival

select * from students;

SELECT 
    uf.id AS form_id,
    uf.name AS student_name,
    uf.roll_no,
    uf.department,
    uf.updation_for,
    fv.status AS verification_status,
    fv.remarks
FROM updation_form uf
LEFT JOIN faculty_verifications fv ON uf.id = fv.updation_form_id;

SELECT * FROM admin_view;






