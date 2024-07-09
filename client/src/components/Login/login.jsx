import React, { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import './login.css'


const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Redirect to home page if login is successful
        navigate('/home');
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
      <div className="auth-container login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="auth-form-group login-form-group">
            <label htmlFor="username" className="auth-label login-label">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="auth-input login-input"
              required
            />
          </div>
          <div className="auth-form-group login-form-group">
            <label htmlFor="password" className="auth-label login-label">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="auth-input login-input"
              required
            />
          </div>
          <button type="submit" className="auth-button login-button">Login</button>
        </form>
        <p className="auth-text login-text">
          Don't have an account? <Link to="/signup" className="auth-link login-link">Sign up here</Link>
        </p>
        
      </div>
      
    </div>
  );
};

export default LoginPage;
