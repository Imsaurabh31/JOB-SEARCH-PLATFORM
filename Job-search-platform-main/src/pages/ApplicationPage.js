import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { submitApplication } from '../api';
import './ApplicationPage.css';

const ApplicationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const job = location.state?.job;

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    cv: null,
    photo: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('job', job._id || job.id);
    fd.append('name', formData.name);
    fd.append('email', formData.email);
    fd.append('mobile', formData.mobile);
    fd.append('address', formData.address);
    if (formData.cv) fd.append('cv', formData.cv);
    if (formData.photo) fd.append('photo', formData.photo);
    const userId = localStorage.getItem('userId');
    if (userId) fd.append('userId', userId);
    try {
      await submitApplication(fd);
    } catch {}
    alert('Application submitted successfully!');
    navigate('/');
  };

  if (!job) {
    return (
      <div className="application-page">
        <div className="error-container">
          <h2>Job not found</h2>
          <button onClick={() => navigate('/')} className="back-btn">
            Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="application-page">
      <div className="application-container">
        <div className="job-details-section">
          <button onClick={() => navigate('/')} className="back-btn">
            ← Back to Jobs
          </button>
          
          <div className="job-info">
            <h1>{job.title}</h1>
            <div className="job-meta">
              <span className="company">Company: {job.company?.display_name}</span>
              <span className="location">Location: {job.location?.display_name}</span>
              <span className="salary">Salary: ${job.salary_min?.toLocaleString()} - ${job.salary_max?.toLocaleString()}</span>
            </div>
            <p className="job-desc">{job.description}</p>
          </div>
        </div>

        <div className="form-section">
          <h2>Apply for this Position</h2>
          
          <form onSubmit={handleSubmit} className="application-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Mobile Number *</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Address *</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows="3"
                required
              />
            </div>

            <div className="file-uploads-grid">
              <div className="form-group file-group">
                <label>Upload CV/Resume *</label>
                <input
                  type="file"
                  name="cv"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>



              <div className="form-group file-group">
                <label>Upload Passport Size Photo *</label>
                <input
                  type="file"
                  name="photo"
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.png"
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;