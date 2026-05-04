import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LeftSidebar.css';

const LeftSidebar = ({ user }) => {
  const navigate = useNavigate();

  const quickLinks = [
    { icon: '🎯', label: 'My Applications', count: 12, path: '/apply' },
    { icon: '💼', label: 'Saved Jobs', count: 8, path: '/jobs' },
    { icon: '🔔', label: 'Job Alerts', count: 3, path: '/jobs' },
    { icon: '📊', label: 'Profile Views', count: 45, path: '/dashboard' }
  ];

  const jobCategories = [
    { name: 'Technology', jobs: 1250 },
    { name: 'Marketing', jobs: 890 },
    { name: 'Finance', jobs: 670 },
    { name: 'Healthcare', jobs: 540 },
    { name: 'Education', jobs: 320 }
  ];

  return (
    <div className="left-sidebar-content">
      <div className="sidebar-section">
        <div className="profile-summary">
          <div className="profile-avatar-large">
            {user?.name?.charAt(0) || 'U'}
          </div>
          <h3>{user?.name || 'User'}</h3>
          <p>{user?.role || 'Job Seeker'}</p>
          <div className="profile-completion">
            <div className="completion-bar">
              <div className="completion-fill" style={{width: '75%'}}></div>
            </div>
            <span>Profile 75% complete</span>
          </div>
        </div>
      </div>

      <div className="sidebar-section">
        <h4>Quick Access</h4>
        <div className="quick-links">
          {quickLinks.map((link, index) => (
            <div key={index} className="quick-link" onClick={() => navigate(link.path)} style={{ cursor: 'pointer' }}>
              <span className="link-icon">{link.icon}</span>
              <span className="link-label">{link.label}</span>
              <span className="link-count">{link.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h4>Job Categories</h4>
        <div className="job-categories">
          {jobCategories.map((category, index) => (
            <div key={index} className="category-item" onClick={() => navigate('/jobs')} style={{ cursor: 'pointer' }}>
              <span className="category-name">{category.name}</span>
              <span className="category-count">{category.jobs}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;