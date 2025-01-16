import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    course: '',
    phone: '',
    highestQualification: '',
    address: '',
  });

  const courses = [
    'Mathematics',
    'Computer Science',
    'Physics',
    'Chemistry',
    'Biology',
    'English Literature',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Here you can add logic to handle form submission, like sending the data to an API.
  };

  return (
    <div className="container mt-5">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="course" className="form-label">
            Select Course
          </label>
          <select
            className="form-select"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select a Course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="highestQualification" className="form-label">
            Highest Qualification
          </label>
          <select
            className="form-select"
            id="highestQualification"
            name="highestQualification"
            value={formData.highestQualification}
            onChange={handleChange}
            required
          >
            <option value="">Select Highest Qualification</option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="Graduated">Graduated</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="course" className="form-label">
            Select Course
          </label>
          <select
            className="form-select"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select a Course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
