import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NaukriStyleHeader from '../components/NaukriStyleHeader';
import './CompanyJobsPage.css';

const CompanyJobsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const company = state?.company;

  const companyData = {
    TCS: { desc: 'Tata Consultancy Services is an Indian multinational IT services and consulting company.', founded: '1968', hq: 'Mumbai, India', industry: 'IT Services', website: 'www.tcs.com' },
    Infosys: { desc: 'Infosys is a global leader in next-generation digital services and consulting.', founded: '1981', hq: 'Bengaluru, India', industry: 'IT Services', website: 'www.infosys.com' },
    Wipro: { desc: 'Wipro Limited is a leading global IT, consulting and business process services company.', founded: '1945', hq: 'Bengaluru, India', industry: 'IT Services', website: 'www.wipro.com' },
    Accenture: { desc: 'Accenture is a global professional services company with capabilities in digital, cloud and security.', founded: '1989', hq: 'Dublin, Ireland', industry: 'Consulting', website: 'www.accenture.com' },
    Cognizant: { desc: 'Cognizant is one of the world\'s leading professional services companies, transforming clients\' business.', founded: '1994', hq: 'New Jersey, USA', industry: 'IT Services', website: 'www.cognizant.com' },
    'HCL Tech': { desc: 'HCL Technologies is a next-generation global technology company that helps enterprises reimagine their businesses.', founded: '1976', hq: 'Noida, India', industry: 'IT Services', website: 'www.hcltech.com' },
  };

  const generateJobs = (companyName) => {
    const roles = [
      { title: 'Software Engineer', type: 'Full-time', level: 'Entry Level', min: 600000, max: 1000000 },
      { title: 'Senior Software Engineer', type: 'Full-time', level: 'Senior Level', min: 1200000, max: 2000000 },
      { title: 'React Developer', type: 'Hybrid', level: 'Mid Level', min: 800000, max: 1400000 },
      { title: 'Java Developer', type: 'Full-time', level: 'Mid Level', min: 700000, max: 1200000 },
      { title: 'Data Analyst', type: 'Full-time', level: 'Entry Level', min: 500000, max: 900000 },
      { title: 'DevOps Engineer', type: 'Remote', level: 'Senior Level', min: 1400000, max: 2200000 },
      { title: 'Business Analyst', type: 'Full-time', level: 'Mid Level', min: 800000, max: 1300000 },
      { title: 'UI/UX Designer', type: 'Hybrid', level: 'Mid Level', min: 700000, max: 1100000 },
      { title: 'Python Developer', type: 'Remote', level: 'Mid Level', min: 900000, max: 1500000 },
      { title: 'Project Manager', type: 'Full-time', level: 'Lead', min: 1500000, max: 2500000 },
    ];
    const locations = ['Bengaluru, India', 'Mumbai, India', 'Hyderabad, India', 'Pune, India', 'Chennai, India', 'Delhi NCR, India', 'Remote'];
    return roles.map((role, i) => ({
      id: `${companyName}-${i}`,
      title: role.title,
      company: { display_name: companyName },
      location: { display_name: locations[i % locations.length] },
      description: `${companyName} is hiring a ${role.title}. You will work on cutting-edge projects, collaborate with global teams, and grow your career in a dynamic environment. Strong technical skills and passion for innovation required.`,
      salary_min: role.min,
      salary_max: role.max,
      jobType: role.type,
      experience: role.level,
    }));
  };

  const [jobs] = useState(company ? generateJobs(company.name) : []);
  const info = company ? companyData[company.name] : null;

  const formatSalary = (min, max) => `₹${(min / 100000).toFixed(1)}L - ₹${(max / 100000).toFixed(1)}L`;

  if (!company) {
    return (
      <div className="cjp-page">
        <NaukriStyleHeader user={{ name: 'Khushi Jha', email: 'khushi@example.com' }} onLogout={() => {}} />
        <div className="cjp-not-found">
          <h2>Company not found</h2>
          <button onClick={() => navigate('/companies')}>← Back to Companies</button>
        </div>
      </div>
    );
  }

  return (
    <div className="cjp-page">
      <NaukriStyleHeader user={{ name: 'Khushi Jha', email: 'khushi@example.com' }} onLogout={() => {}} />
      <div className="cjp-container">
        <button className="cjp-back" onClick={() => navigate('/companies')}>← Back to Companies</button>

        {/* Company Header */}
        <div className="cjp-company-header">
          <div className="cjp-logo">{company.logo}</div>
          <div className="cjp-company-info">
            <h1>{company.name}</h1>
            <div className="cjp-tags">
              <span>⭐ {company.rating} Rating</span>
              <span>💬 {company.reviews} Reviews</span>
              <span>👥 {company.employees} Employees</span>
              {info && <span>🏭 {info.industry}</span>}
              {info && <span>📍 {info.hq}</span>}
            </div>
            {info && <p className="cjp-desc">{info.desc}</p>}
          </div>
        </div>

        {/* Jobs List */}
        <div className="cjp-jobs-header">
          <h2>💼 {jobs.length} Jobs at {company.name}</h2>
        </div>

        <div className="cjp-jobs-grid">
          {jobs.map((job) => (
            <div key={job.id} className="cjp-job-card">
              <div className="cjp-job-top">
                <h3 className="cjp-job-title">{job.title}</h3>
                <div className="cjp-job-tags">
                  <span className="tag-location">📍 {job.location.display_name}</span>
                  <span className="tag-type">💼 {job.jobType}</span>
                  <span className="tag-level">🎯 {job.experience}</span>
                </div>
              </div>
              <p className="cjp-job-desc">{job.description}</p>
              <div className="cjp-job-footer">
                <span className="cjp-salary">💰 {formatSalary(job.salary_min, job.salary_max)}</span>
                <div className="cjp-job-btns">
                  <button className="btn-detail" onClick={() => navigate('/job-detail', { state: { job } })}>View Details</button>
                  <button className="btn-apply" onClick={() => navigate('/apply', { state: { job } })}>⚡ Apply Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyJobsPage;
