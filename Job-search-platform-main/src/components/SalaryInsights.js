import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SalaryInsights.css';

const SalaryInsights = () => {
  const navigate = useNavigate();
  const salaryData = [
    { role: 'Software Engineer', experience: '0-3 years', salary: '₹3-8 LPA' },
    { role: 'Senior Developer', experience: '3-6 years', salary: '₹8-15 LPA' },
    { role: 'Tech Lead', experience: '6-10 years', salary: '₹15-25 LPA' }
  ];

  return (
    <div className="salary-insights">
      <h3>💰 Salary Insights</h3>
      <div className="salary-list">
        {salaryData.map((item, index) => (
          <div key={index} className="salary-item" onClick={() => navigate('/salary')} style={{ cursor: 'pointer' }}>
            <div className="role-info">
              <h4>{item.role}</h4>
              <span className="experience">{item.experience}</span>
            </div>
            <div className="salary-range">{item.salary}</div>
          </div>
        ))}
      </div>
      <div className="salary-tools">
        <button onClick={() => navigate('/salary')}>Salary Calculator</button>
        <button onClick={() => navigate('/salary')}>Compare Salaries</button>
      </div>
    </div>
  );
};

export default SalaryInsights;