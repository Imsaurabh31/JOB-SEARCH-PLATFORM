import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>JobFinder</h3>
          <p>Your gateway to dream careers. Find jobs, build skills, grow professionally.</p>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">💼</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">🐦</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">📘</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">📷</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>For Job Seekers</h4>
          <ul>
            <li><a href="/jobs">Browse Jobs</a></li>
            <li><a href="/companies">Companies</a></li>
            <li><a href="/salary">Salary Insights</a></li>
            <li><a href="/resume">Resume Builder</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>For Employers</h4>
          <ul>
            <li><a href="/post-job">Post Jobs</a></li>
            <li><a href="/search-candidates">Find Candidates</a></li>
            <li><a href="/employer-branding">Employer Branding</a></li>
            <li><a href="/recruitment-solutions">Solutions</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="/career-advice">Career Advice</a></li>
            <li><a href="/interview-tips">Interview Tips</a></li>
            <li><a href="/skill-tests">Skill Tests</a></li>
            <li><a href="/courses">Courses</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 JobFinder. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;