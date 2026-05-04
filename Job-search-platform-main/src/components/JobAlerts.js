import React, { useState } from 'react';
import './JobAlerts.css';

const JobAlerts = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, title: 'React Developer', location: 'Bangalore', active: true },
    { id: 2, title: 'Frontend Engineer', location: 'Mumbai', active: false }
  ]);

  return (
    <div className="job-alerts">
      <h3>🔔 Job Alerts</h3>
      <div className="alert-form">
        <input placeholder="Job title, skills" />
        <input placeholder="Location" />
        <button>Create Alert</button>
      </div>
      <div className="alerts-list">
        {alerts.map(alert => (
          <div key={alert.id} className="alert-item">
            <span>{alert.title} in {alert.location}</span>
            <button 
              className={alert.active ? 'active' : 'inactive'}
              onClick={() => setAlerts(alerts.map(a => a.id === alert.id ? { ...a, active: !a.active } : a))}
            >
              {alert.active ? 'Active' : 'Paused'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobAlerts;