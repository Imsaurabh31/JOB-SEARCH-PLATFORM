import React from 'react';
import { useNavigate } from 'react-router-dom';
import './JobStats.css';

const JobStats = () => {
  const navigate = useNavigate();
  return (
    <div className="job-stats">
      <div className="stats-container">
        <div className="stat-item" onClick={() => navigate('/jobs')} style={{ cursor: 'pointer' }}>
          <span className="stat-number">3.2M+</span>
          <span className="stat-label">Jobs</span>
        </div>
        <div className="stat-item" onClick={() => navigate('/companies')} style={{ cursor: 'pointer' }}>
          <span className="stat-number">50K+</span>
          <span className="stat-label">Companies</span>
        </div>
        <div className="stat-item" onClick={() => navigate('/jobs')} style={{ cursor: 'pointer' }}>
          <span className="stat-number">40M+</span>
          <span className="stat-label">Job Seekers</span>
        </div>
        <div className="stat-item" onClick={() => navigate('/resume')} style={{ cursor: 'pointer' }}>
          <span className="stat-number">1M+</span>
          <span className="stat-label">Resumes</span>
        </div>
      </div>
    </div>
  );
};

export default JobStats;