import React, { useState } from 'react';
import { loginUser, registerUser } from '../api';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'Job Seeker'
  });
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) { alert('Please fill in all fields'); return; }
    setError('');
    try {
      const res = isRegister
        ? await registerUser({ name: formData.name, email: formData.email, password: formData.password, role: formData.role })
        : await loginUser({ email: formData.email, password: formData.password });
      if (res.token) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('userId', res.user.id);
        onLogin(res.user);
      } else {
        setError(res.message || 'Something went wrong');
      }
    } catch {
      setError('Server not reachable. Using demo login.');
      onLogin({ name: formData.name || 'Demo User', email: formData.email, role: formData.role });
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <h1>Job Finder</h1>
          <h2>{isRegister ? 'Create Account' : 'Welcome Back'}</h2>
          <p>{isRegister ? 'Register to find your dream job' : 'Sign in to find your dream job'}</p>

          {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}

          <form onSubmit={handleSubmit}>
            {isRegister && (
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" value={formData.name || ''} onChange={handleInputChange} required />
              </div>
            )}

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
            </div>

            <div className="form-group">
              <label>Role</label>
              <select name="role" value={formData.role} onChange={handleInputChange} className="role-select">
                <option value="Job Seeker">Job Seeker</option>
                <option value="Recruiter">Recruiter</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <button type="submit" className="login-btn">
              {isRegister ? 'Register' : 'Sign In'}
            </button>
          </form>

          <div className="auth-note">
            <p>
              {isRegister ? 'Already have an account? ' : "Don't have an account? "}
              <button onClick={() => { setIsRegister(!isRegister); setError(''); }} style={{ background: 'none', border: 'none', color: '#4a90e2', cursor: 'pointer', fontWeight: 'bold' }}>
                {isRegister ? 'Sign In' : 'Register'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;