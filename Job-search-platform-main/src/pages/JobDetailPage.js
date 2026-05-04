import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NaukriStyleHeader from '../components/NaukriStyleHeader';
import './JobDetailPage.css';

const JobDetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const job = state?.job;

  if (!job) {
    return (
      <div className="jd-page">
        <NaukriStyleHeader user={{ name: 'Khushi Jha', email: 'khushi@example.com' }} onLogout={() => {}} />
        <div className="jd-not-found">
          <h2>Job not found</h2>
          <button onClick={() => navigate('/')}>← Back to Jobs</button>
        </div>
      </div>
    );
  }

  const formatSalary = (min, max) => {
    if (!min && !max) return 'Competitive Salary';
    if (min && max) return `$${min.toLocaleString()} - $${max.toLocaleString()} / year`;
    if (min) return `From $${min.toLocaleString()}`;
    return `Up to $${max.toLocaleString()}`;
  };

  return (
    <div className="jd-page">
      <NaukriStyleHeader user={{ name: 'Khushi Jha', email: 'khushi@example.com' }} onLogout={() => {}} />

      <div className="jd-container">
        <button className="jd-back" onClick={() => navigate(-1)}>← Back to Jobs</button>

        <div className="jd-card">
          <div className="jd-header">
            <div className="jd-company-logo">{job.company?.display_name?.charAt(0) || 'C'}</div>
            <div className="jd-title-block">
              <h1 className="jd-title">{job.title}</h1>
              <p className="jd-company">{job.company?.display_name}</p>
            </div>
          </div>

          <div className="jd-tags">
            <span className="jd-tag location">📍 {job.location?.display_name || 'Remote'}</span>
            <span className="jd-tag type">💼 {job.jobType || 'Full-time'}</span>
            <span className="jd-tag level">🎯 {job.experience || 'Entry Level'}</span>
            <span className="jd-tag salary">💰 {formatSalary(job.salary_min, job.salary_max)}</span>
          </div>

          <div className="jd-section">
            <h2>Job Description</h2>
            <p>{job.description}</p>
          </div>

          <div className="jd-section">
            <h2>About {job.company?.display_name}</h2>
            <p>{job.company?.display_name} is a leading company offering exciting career opportunities with competitive benefits, growth potential, and a collaborative work environment.</p>
          </div>

          <div className="jd-section">
            <h2>Requirements</h2>
            <ul className="jd-list">
              <li>Strong knowledge in {job.title?.split(' ')[0]} technologies</li>
              <li>Good communication and teamwork skills</li>
              <li>Problem-solving mindset</li>
              <li>Experience level: {job.experience || 'Entry Level'}</li>
            </ul>
          </div>

          <div className="jd-section">
            <h2>Benefits</h2>
            <ul className="jd-list">
              <li>💰 Competitive salary: {formatSalary(job.salary_min, job.salary_max)}</li>
              <li>🏥 Health insurance</li>
              <li>🏖️ Paid time off</li>
              <li>📈 Career growth opportunities</li>
              <li>🏠 {job.jobType === 'Remote' || job.jobType === 'Hybrid' ? 'Work from home options' : 'Modern office environment'}</li>
            </ul>
          </div>

          <div className="jd-actions">
            <button className="jd-apply-btn" onClick={() => navigate('/apply', { state: { job } })}>
              ⚡ Apply Now
            </button>
            <button className="jd-company-btn" onClick={() => navigate('/companies')}>
              🏢 View Company
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
