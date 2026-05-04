import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContentFiller.css';

const ContentFiller = () => {
  const navigate = useNavigate();
  const tipLinks = ['/resume', '/jobs', '/companies', '/skills'];
  const jobTips = [
    { icon: '💼', title: 'Perfect Your Resume', desc: 'Use action verbs and quantify achievements' },
    { icon: '🎯', title: 'Target Your Applications', desc: 'Customize each application for the role' },
    { icon: '🤝', title: 'Network Actively', desc: 'Connect with professionals in your field' },
    { icon: '📚', title: 'Keep Learning', desc: 'Stay updated with industry trends' }
  ];

  return (
    <div className="content-filler">
      <div className="filler-section">
        <h3>🚀 Job Search Tips</h3>
        <div className="tips-grid">
          {jobTips.map((tip, index) => (
            <div key={index} className="tip-card" onClick={() => navigate(tipLinks[index])} style={{ cursor: 'pointer' }}>
              <div className="tip-icon">{tip.icon}</div>
              <h4>{tip.title}</h4>
              <p>{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="filler-section">
        <div className="motivational-quote">
          <h3>💡 Daily Motivation</h3>
          <blockquote>
            "Success is not final, failure is not fatal: it is the courage to continue that counts."
          </blockquote>
          <cite>- Winston Churchill</cite>
        </div>
      </div>
    </div>
  );
};

export default ContentFiller;