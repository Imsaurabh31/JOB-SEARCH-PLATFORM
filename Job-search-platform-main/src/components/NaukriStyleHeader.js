import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NaukriStyleHeader.css';

const NaukriStyleHeader = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    { id: 1, text: 'New job match found!', time: '2 min ago', unread: true },
    { id: 2, text: 'Application viewed by recruiter', time: '1 hour ago', unread: true },
    { id: 3, text: 'Profile completion reminder', time: '2 hours ago', unread: false }
  ];

  return (
    <header className="naukri-header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <span className="logo-text">JobFinder</span>
            <span className="logo-tagline">Pro</span>
          </div>
          <nav className="main-nav">
            <a href="/jobs" className="nav-link active">Jobs</a>
            <a href="/companies" className="nav-link">Companies</a>
            <a href="/services" className="nav-link">Services</a>
            <a href="/resume" className="nav-link">Resume</a>
            <a href="/skills" className="nav-link">Skills</a>
            <a href="/salary" className="nav-link">Salary</a>
            <a href="/showcase" className="nav-link">Showcase</a>
          </nav>
        </div>

        <div className="header-right">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search jobs, companies, skills..."
              className="header-search"
              onKeyDown={(e) => e.key === 'Enter' && navigate('/jobs')}
            />
            <button className="search-btn" onClick={() => navigate('/jobs')}>🔍</button>
          </div>

          <div className="header-actions">
            <div className="notification-wrapper">
              <button 
                className="notification-btn"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                🔔
                <span className="notification-badge">2</span>
              </button>
              
              {showNotifications && (
                <div className="notification-dropdown">
                  <div className="dropdown-header">
                    <h4>Notifications</h4>
                    <button className="mark-read" onClick={() => setShowNotifications(false)}>Mark all read</button>
                  </div>
                  <div className="notification-list">
                    {notifications.map(notif => (
                      <div key={notif.id} className={`notification-item ${notif.unread ? 'unread' : ''}`}>
                        <p>{notif.text}</p>
                        <span className="notification-time">{notif.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="profile-wrapper">
              <button 
                className="profile-btn"
                onClick={() => setShowProfile(!showProfile)}
              >
                <div className="profile-avatar">
                  {user?.name?.charAt(0) || 'U'}
                </div>
                <span className="profile-name">{user?.name || 'User'}</span>
                <span className="dropdown-arrow">▼</span>
              </button>

              {showProfile && (
                <div className="profile-dropdown">
                  <div className="profile-info">
                    <div className="profile-avatar large">
                      {user?.name?.charAt(0) || 'U'}
                    </div>
                    <div>
                      <h4>{user?.name || 'User Name'}</h4>
                      <p>{user?.email || 'user@email.com'}</p>
                    </div>
                  </div>
                  <div className="profile-menu">
                    <a href="/profile">View Profile</a>
                    <a href="/settings">Settings</a>
                    <a href="/applications">My Applications</a>
                    <button onClick={onLogout} className="logout-option">Logout</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NaukriStyleHeader;