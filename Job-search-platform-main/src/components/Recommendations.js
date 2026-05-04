import React, { useState, useEffect } from 'react';
import './Recommendations.css';

const Recommendations = ({ userSkills = [], userInterests = [] }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock job data for recommendations
  const mockJobs = [
    { id: 1, title: 'React Developer', company: 'TechCorp', skills: ['React', 'JavaScript', 'CSS'], match: 95 },
    { id: 2, title: 'Frontend Engineer', company: 'StartupXYZ', skills: ['React', 'TypeScript', 'Node.js'], match: 88 },
    { id: 3, title: 'Full Stack Developer', company: 'InnovateLab', skills: ['JavaScript', 'Python', 'React'], match: 82 },
    { id: 4, title: 'UI/UX Developer', company: 'DesignHub', skills: ['CSS', 'JavaScript', 'Figma'], match: 75 },
  ];

  useEffect(() => {
    // Simulate AI-based recommendation algorithm
    setTimeout(() => {
      const scored = mockJobs.map(job => ({
        ...job,
        matchScore: calculateMatch(job.skills, userSkills)
      })).sort((a, b) => b.matchScore - a.matchScore);
      
      setRecommendations(scored);
      setLoading(false);
    }, 1000);
  }, [userSkills]);

  const calculateMatch = (jobSkills, userSkills) => {
    if (!userSkills.length) return Math.floor(Math.random() * 40) + 60; // Random for demo
    
    const matches = jobSkills.filter(skill => 
      userSkills.some(userSkill => 
        userSkill.toLowerCase().includes(skill.toLowerCase())
      )
    );
    return Math.min(95, (matches.length / jobSkills.length) * 100);
  };

  if (loading) {
    return (
      <div className="recommendations-container">
        <div className="loading-spinner">🔄 Analyzing your profile...</div>
      </div>
    );
  }

  return (
    <div className="recommendations-container">
      <div className="recommendations-header">
        <h2>🎯 Recommended for You</h2>
        <p>Based on your skills and interests</p>
      </div>
      
      <div className="recommendations-grid">
        {recommendations.map(job => (
          <div key={job.id} className="recommendation-card">
            <div className="match-score">
              <span className="match-percentage">{Math.round(job.matchScore)}%</span>
              <span className="match-label">Match</span>
            </div>
            
            <div className="job-info">
              <h3>{job.title}</h3>
              <p className="company">{job.company}</p>
              
              <div className="skills-match">
                <span className="skills-label">Skills:</span>
                <div className="skills-list">
                  {job.skills.map(skill => (
                    <span 
                      key={skill} 
                      className={`skill-tag ${userSkills.some(us => 
                        us.toLowerCase().includes(skill.toLowerCase())
                      ) ? 'matched' : ''}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="recommendation-actions">
              <button className="apply-btn">Quick Apply</button>
              <button className="save-btn">💾</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="ai-note">
        <p>🤖 Recommendations powered by AI matching algorithm</p>
      </div>
    </div>
  );
};

export default Recommendations;