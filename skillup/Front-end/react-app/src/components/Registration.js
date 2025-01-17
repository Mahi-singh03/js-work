import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    selectedCourse: '',
    address: '',
    qualification: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) navigate('/');
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const { fullName, emailAddress, phoneNumber, selectedCourse, address, qualification, password } = formData;
    if (!fullName.trim()) return 'Full name is required.';
    if (!/\S+@\S+\.\S+/.test(emailAddress)) return 'Please enter a valid email address.';
    if (!phoneNumber.trim()) return 'Phone number is required.';
    if (!selectedCourse.trim()) return 'Please select a course.';
    if (!address.trim()) return 'Address is required.';
    if (!qualification.trim()) return 'Please select a qualification.';
    if (password.length < 6) return 'Password must be at least 6 characters long.';
    return null;
  };

  const handleRegistration = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/Registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data));
        window.dispatchEvent(new Event('storage'));
        navigate('/', { replace: true });
      } else {
        setError(data.message || 'Failed to register. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const courses = [
    'Course 1',
    'Course 2',
    'Course 3'
  ];

  const qualifications = [
    '10th',
    '12th',
    'Graduated'
  ];

  return (
    <form onSubmit={handleRegistration} className="registration-form responsive">
      <h1>Register</h1>
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} id="fullName" required />
      </div>
      <div className="form-group">
        <label htmlFor="emailAddress">Email Address</label>
        <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange} id="emailAddress" required />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} id="phoneNumber" required />
      </div>
      <div className="form-group">
        <label htmlFor="selectedCourse">Course</label>
        <select name="selectedCourse" value={formData.selectedCourse} onChange={handleInputChange} id="selectedCourse" required>
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option key={course} value={course}>{course}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleInputChange} id="address" required />
      </div>
      <div className="form-group">
        <label htmlFor="qualification">Qualification</label>
        <select name="qualification" value={formData.qualification} onChange={handleInputChange} id="qualification" required>
          <option value="">Select a qualification</option>
          {qualifications.map((qual) => (
            <option key={qual} value={qual}>{qual}</option>
          ))}
        </select>
      </div>
      <div className="form-group password-group">
        <label htmlFor="password">Password</label>
        <div className="password-wrapper">
          <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleInputChange} id="password" required />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="toggle-password"
          >
            {showPassword ? <span>&#x1F441;</span> : <span>&#x1F576;</span>}
          </button>
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
      <div className="form-actions">
        <button type="submit" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
      </div>
      <div className="login-redirect">
        <span>Already have an account? <Link to="/Login">Log In</Link></span>
      </div>
    </form>
  );
};

export default Registration;
