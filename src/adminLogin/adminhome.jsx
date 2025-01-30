import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './AdminHome.css';

const AdminHome = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('All');
  const [filterSkill, setFilterSkill] = useState('');
  const [filterRating, setFilterRating] = useState('');
  const [filterCgpa, setFilterCgpa] = useState('');
  const navigate = useNavigate();

  // Dummy student data
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

  // Handle filtering students based on department, skills, rating, and CGPA
  const filteredStudents = students.filter(student => {
    const matchesDepartment = filterDepartment === 'All' || student.department === filterDepartment;
    const matchesSkill = filterSkill === '' || student.skills.toLowerCase().includes(filterSkill.toLowerCase());
    const matchesRating = filterRating === '' || student.rating >= parseFloat(filterRating);
    const matchesCgpa = filterCgpa === '' || student.cgpa >= parseFloat(filterCgpa);

    return (
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      matchesDepartment &&
      matchesSkill &&
      matchesRating &&
      matchesCgpa
    );
  });

  // Function to handle clicking on a student row
  const handleStudentClick = (id) => {
    navigate(`/student/${id}`);
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search Students"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        
        {/* Department Filter */}
        <select value={filterDepartment} onChange={(e) => setFilterDepartment(e.target.value)} className="filter-dropdown">
          <option value="All">All Departments</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="ME">ME</option>
          <option value="EIE">EIE</option>
          <option value="FT">FT</option>
          <option value="FD">FD</option>
          <option value="MECH">MECH</option>
          <option value="BT">BT</option>
          <option value="CSD">CSD</option>
          <option value="EEE">EEE</option>
          <option value="BME">BME</option>
        </select>

        {/* Skill Filter */}
        <input
          type="text"
          placeholder="Filter by Skill"
          value={filterSkill}
          onChange={(e) => setFilterSkill(e.target.value)}
          className="filter-input"
        />

        {/* Rating Filter */}
        <input
          type="number"
          placeholder="Min Rating"
          value={filterRating}
          onChange={(e) => setFilterRating(e.target.value)}
          className="filter-input"
        />

        {/* CGPA Filter */}
        <input
          type="number"
          placeholder="Min CGPA"
          value={filterCgpa}
          onChange={(e) => setFilterCgpa(e.target.value)}
          className="filter-input"
        />
      </div>
      
      <div className="student-list">
        {filteredStudents.map((student) => (
          <button
            key={student.id}
            className="student-row"
            onClick={() => handleStudentClick(student.id)}
          >
            {student.name} - {student.department}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdminHome;
