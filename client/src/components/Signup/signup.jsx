import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './signup.css'



const SignUpPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '', phoneNumber: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Sign up successful. Please log in.');
        navigate('/login');
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="auth-form-group signup-form-group">
            <label htmlFor="username" className="auth-label signup-label">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="auth-input signup-input"
              required
            />
          </div>
          <div className="auth-form-group signup-form-group">
            <label htmlFor="password" className="auth-label signup-label">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="auth-input signup-input"
              required
            />
          </div>
          <div className="auth-form-group signup-form-group">
            <label htmlFor="phoneNumber" className="auth-label signup-label">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="auth-input signup-input"
              required
            />
          </div>
          <button type="submit" className="auth-button signup-button">Sign Up</button>
        </form>
        <p className="auth-text signup-text">
          Already have an account? <Link to="/login" className="auth-link signup-link">Log in here</Link>
        </p>
        
      </div>
    </div>
  );
};

export default SignUpPage;
