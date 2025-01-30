import React, { useState } from 'react';
import './updateForm.css';

const PlUpdateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    department: '',
    updationFor: '',
    language:'',
    percentage: '',
    selfRating: '',
    certificateImage: null
  });

  const departments = ['Computer Science And Engineering', 'Mechanical Enginnering', 'Electrical Enginnering', 'Civil Engineering', 'Biomedical Engineering']; // Add more as needed
  const language = ['C','Java','Python','UI/UX','Database','Aptitude'];
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to a server
    console.log(formData);
  };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit} className="update-form">
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div>
        <label>Roll No:</label>
        <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} required />
      </div>

      <div>
        <label>Department:</label>
        <select name="department" value={formData.department} onChange={handleChange} required>
          <option value="" disabled>Select Department</option>
          {departments.map((dept, index) => (
            <option key={index} value={dept}>{dept}</option>
          ))}
        </select>
      </div>

      <div>
          <label>Updation For:</label>
          <div className='bold'>
          <select name="updationFor" value={formData.updationFor} disabled>
            <option value="Programming Language" >Programming Language</option>
          </select> {/* Disabled select box */}
          </div>
      </div>

      <div>
        <label>Percentage:</label>
        <input type="number" name="percentage" value={formData.percentage} onChange={handleChange} required />
      </div>

      <div>
        <label>Self Rating:</label>
        <input type="number" name="selfRating" value={formData.selfRating} onChange={handleChange} min="1" max="10" required />
      </div>

      <div>
        <label>Certificate Image:</label>
        <input type="file" name="certificateImage" accept="image/*" onChange={handleChange} />
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default PlUpdateForm;
