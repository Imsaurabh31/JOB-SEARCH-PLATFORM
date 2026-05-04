import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RightSidebar.css';

const RightSidebar = () => {
  const navigate = useNavigate();
  const trendingJobs = [
    { title: 'React Developer', company: 'TechCorp', salary: '₹8-12L', type: 'Remote' },
    { title: 'Data Scientist', company: 'DataFlow', salary: '₹15-20L', type: 'Hybrid' },
    { title: 'UI/UX Designer', company: 'DesignHub', salary: '₹6-10L', type: 'Onsite' }
  ];

  const companies = [
    { name: 'Google', logo: '🔍', jobs: 45, rating: 4.8 },
    { name: 'Microsoft', logo: '🪟', jobs: 32, rating: 4.7 },
    { name: 'Amazon', logo: '📦', jobs: 28, rating: 4.6 },
    { name: 'Apple', logo: '🍎', jobs: 15, rating: 4.9 }
  ];

  const jobStats = [
    { label: 'Jobs Posted Today', value: '2,847', trend: '+12%' },
    { label: 'Active Companies', value: '1,250', trend: '+8%' },
    { label: 'New Registrations', value: '456', trend: '+15%' }
  ];

  return (
    <div className="right-sidebar-content">
      <div className="sidebar-section">
        <h4>📈 Job Market Stats</h4>
        <div className="job-stats">
          {jobStats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-trend">{stat.trend}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h4>🔥 Trending Jobs</h4>
        <div className="trending-jobs">
          {trendingJobs.map((job, index) => (
            <div key={index} className="trending-job" onClick={() => navigate('/jobs')} style={{ cursor: 'pointer' }}>
              <div className="job-info">
                <h5>{job.title}</h5>
                <p>{job.company}</p>
              </div>
              <div className="job-details">
                <span className="salary">{job.salary}</span>
                <span className={`job-type ${job.type.toLowerCase()}`}>{job.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h4>🏢 Top Companies</h4>
        <div className="top-companies">
          {companies.map((company, index) => (
            <div key={index} className="company-item" onClick={() => navigate('/companies')} style={{ cursor: 'pointer' }}>
              <div className="company-logo">{company.logo}</div>
              <div className="company-info">
                <h5>{company.name}</h5>
                <p>{company.jobs} jobs • ⭐ {company.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <div className="career-tip">
          <h4>💡 Career Tip</h4>
          <p>Update your profile regularly to increase visibility by 40%. Add new skills and certifications to stay competitive!</p>
          <button className="tip-action" onClick={() => navigate('/skills')}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;