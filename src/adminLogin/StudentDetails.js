import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams for getting the ID
import './StudentDetails.css';

const StudentDetails = () => {
  const { id } = useParams(); // Get the student ID from the URL

  // Dummy data, this could be replaced by an API call or fetched from context/state
  const students = [
    { id: 1, name: 'Abinaya', department: 'CSE', skills: 'Java, Python, Data Structures', rating: 4.8, cgpa: 9.2 },
    { id: 2, name: 'Bavan', department: 'ECE', skills: 'Embedded Systems, VHDL, C', rating: 4.4, cgpa: 8.5 },
    { id: 3, name: 'Xavier', department: 'ME', skills: 'SolidWorks, AutoCAD, MATLAB', rating: 4.3, cgpa: 8.7 },
    { id: 4, name: 'Samuel', department: 'EIE', skills: 'Instrumentation, Control Systems, PLC', rating: 4.1, cgpa: 8.6 },
    { id: 5, name: 'Mathan', department: 'FT', skills: 'Food Processing, Quality Control, HACCP', rating: 4.2, cgpa: 8.4 },
    { id: 6, name: 'Karthika', department: 'FD', skills: 'Fashion Design, Sketching, Pattern Making', rating: 4.7, cgpa: 9.0 },
    { id: 7, name: 'Saranya', department: 'MECH', skills: 'Mechanical Design, Thermodynamics, CAD', rating: 4.3, cgpa: 8.8 },
    { id: 8, name: 'Samuel', department: 'BT', skills: 'Biotechnology, Cell Biology, Genetic Engineering', rating: 4.5, cgpa: 8.9 },
    { id: 9, name: 'Ranjith', department: 'CSD', skills: 'Cloud Computing, Cybersecurity, AI', rating: 4.6, cgpa: 9.1 },
    { id: 10, name: 'Sathik', department: 'EEE', skills: 'Electrical Circuits, Power Electronics, MATLAB', rating: 4.4, cgpa: 8.5 },
    { id: 11, name: 'Mohammad', department: 'BME', skills: 'Biomedical Engineering, Signal Processing, MATLAB', rating: 4.3, cgpa: 8.7 }
  ];

  // Find the student by ID
  const student = students.find(student => student.id === parseInt(id));

  return (
    <div className="student-details-container">
      {student ? (
        <>
          <h1>{student.name}'s Profile</h1>
          <p><strong>Department:</strong> {student.department}</p>
          <p><strong>Skills:</strong> {student.skills}</p>
          <p><strong>Rating:</strong> {student.rating}</p>
          <p><strong>CGPA:</strong> {student.cgpa}</p>
        </>
      ) : (
        <p>Student not found</p>
      )}
    </div>
  );
};

export default StudentDetails;
