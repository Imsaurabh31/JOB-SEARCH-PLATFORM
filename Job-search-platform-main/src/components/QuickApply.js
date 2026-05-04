import React, { useState } from 'react';
import { submitApplication } from '../api';
import './QuickApply.css';

const QuickApply = ({ job, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const fd = new FormData();
      fd.append('job', job._id || job.id);
      fd.append('name', formData.name);
      fd.append('email', formData.email);
      fd.append('mobile', formData.phone);
      fd.append('address', formData.coverLetter || 'Quick Apply');
      await submitApplication(fd);
    } catch {}
    onSuccess();
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="quick-apply-overlay">
      <div className="quick-apply-modal">
        <div className="modal-header">
          <h2>⚡ Quick Apply</h2>
          <button onClick={onClose} className="close-btn">×</button>
        </div>
        
        <div className="job-summary">
          <h3>{job.title}</h3>
          <p>{job.company}</p>
        </div>

        <form onSubmit={handleSubmit} className="quick-form">
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          
          <textarea
            name="coverLetter"
            placeholder="Brief cover letter (optional)"
            value={formData.coverLetter}
            onChange={handleChange}
            rows="3"
          />
          
          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting} className="submit-btn">
              {isSubmitting ? 'Applying...' : 'Apply Now'}
            </button>
          </div>
        </form>
        
        <div className="quick-note">
          <p>🚀 Your application will be sent instantly!</p>
        </div>
      </div>
    </div>
  );
};

export default QuickApply;