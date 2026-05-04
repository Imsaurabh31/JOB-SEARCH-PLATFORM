import React, { useState } from 'react';
import './SkillAssessment.css';

const SkillAssessment = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  
  const skills = [
    { name: 'JavaScript', level: 85, badge: 'Expert' },
    { name: 'React', level: 78, badge: 'Advanced' },
    { name: 'Node.js', level: 65, badge: 'Intermediate' },
    { name: 'Python', level: 45, badge: 'Beginner' }
  ];
  
  const allSkills = [
    ...skills,
    { name: 'HTML/CSS', level: 92, badge: 'Expert' },
    { name: 'MongoDB', level: 55, badge: 'Intermediate' },
    { name: 'Git', level: 70, badge: 'Advanced' },
    { name: 'TypeScript', level: 40, badge: 'Beginner' }
  ];
  
  const handleTakeTest = () => {
    window.open('/test', '_blank');
  };
  
  const handleViewAll = () => {
    setShowAllSkills(!showAllSkills);
  };
  
  const displaySkills = showAllSkills ? allSkills : skills;

  return (
    <div className="skill-assessment">
      <h3>🎯 Skill Assessment</h3>
      <div className="skills-list">
        {displaySkills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className={`skill-badge ${skill.badge.toLowerCase()}`}>
                {skill.badge}
              </span>
            </div>
            <div className="skill-progress">
              <div 
                className="progress-bar" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="skill-percentage">{skill.level}%</span>
          </div>
        ))}
      </div>
      <div className="assessment-actions">
        <button className="take-test" onClick={handleTakeTest}>
          Take New Test
        </button>
        <button className="view-all" onClick={handleViewAll}>
          {showAllSkills ? 'Show Less' : 'View All Skills'}
        </button>
      </div>
    </div>
  );
};

export default SkillAssessment;