import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ userRole, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderAdminDashboard = () => (
    <div className="dashboard-content">
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Jobs</h3>
          <span className="stat-number">1,247</span>
        </div>
        <div className="stat-card">
          <h3>Active Recruiters</h3>
          <span className="stat-number">89</span>
        </div>
        <div className="stat-card">
          <h3>Job Seekers</h3>
          <span className="stat-number">5,432</span>
        </div>
      </div>
      <div className="admin-actions">
        <button className="action-btn">Manage Users</button>
        <button className="action-btn">System Settings</button>
      </div>
    </div>
  );

  const renderRecruiterDashboard = () => (
    <div className="dashboard-content">
      <div className="quick-actions">
        <button className="primary-btn">Post New Job</button>
        <button className="secondary-btn">View Applications</button>
      </div>
      <div className="recruiter-stats">
        <div className="stat-card">
          <h3>My Jobs</h3>
          <span className="stat-number">12</span>
        </div>
        <div className="stat-card">
          <h3>Applications</h3>
          <span className="stat-number">156</span>
        </div>
      </div>
    </div>
  );

  const renderJobSeekerDashboard = () => (
    <div className="dashboard-content">
      <div className="recommendations">
        <h3>Recommended Jobs</h3>
        <div className="job-recommendations">
          <div className="rec-job">React Developer - TechCorp</div>
          <div className="rec-job">Frontend Engineer - StartupXYZ</div>
        </div>
      </div>
      <div className="seeker-stats">
        <div className="stat-card">
          <h3>Applications Sent</h3>
          <span className="stat-number">8</span>
        </div>
        <div className="stat-card">
          <h3>Profile Views</h3>
          <span className="stat-number">23</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>{userRole} Dashboard</h1>
        <button onClick={onLogout} className="logout-btn">Logout</button>
      </header>
      
      <nav className="dashboard-nav">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'profile' ? 'active' : ''}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
      </nav>

      {activeTab === 'overview' && (
        <>
          {userRole === 'Admin' && renderAdminDashboard()}
          {userRole === 'Recruiter' && renderRecruiterDashboard()}
          {userRole === 'Job Seeker' && renderJobSeekerDashboard()}
        </>
      )}
    </div>
  );
};

export default Dashboard;