import React, { useState } from 'react';
import './ApplicationForm.css';

const ApplicationForm = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    cv: null,
    signature: null,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully!');
    onClose();
  };

  return (
    <div className="application-overlay">
      <div className="application-form">
        <div className="form-header">
          <h2>Apply for {job.title}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit}>
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
              <label>Upload Signature *</label>
              <input
                type="file"
                name="signature"
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,.pdf"
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

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;