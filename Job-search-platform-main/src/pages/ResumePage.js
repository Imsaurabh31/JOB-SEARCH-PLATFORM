import React, { useState, useEffect } from 'react';
import NaukriStyleHeader from '../components/NaukriStyleHeader';
import Footer from '../components/Footer';
import { saveResume, fetchMyResume } from '../api';
import './ResumePage.css';

const ResumePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    skills: '',
    experience: '',
    education: '',
    projects: ''
  });

  const [selectedTemplate, setSelectedTemplate] = useState('professional');

  const templates = {
    professional: { name: 'Professional', color: '#2c3e50' },
    modern: { name: 'Modern', color: '#3498db' },
    creative: { name: 'Creative', color: '#e74c3c' },
    minimal: { name: 'Minimal', color: '#34495e' }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    fetchMyResume().then(data => {
      if (data && data.name) setFormData(f => ({ ...f, ...data }));
    }).catch(() => {});
  }, []);

  const handleSave = async () => {
    try {
      await saveResume({ ...formData, template: selectedTemplate });
      alert('✅ Resume saved to your profile!');
    } catch {
      alert('Backend not connected. Resume saved locally only.');
    }
  };

  const handleDownload = () => {
    const resumeContent = `
=== ${formData.name.toUpperCase() || 'YOUR NAME'} ===
Template: ${templates[selectedTemplate].name}

CONTACT INFORMATION:
Email: ${formData.email || 'your.email@example.com'}
Phone: ${formData.phone || '+91 XXXXXXXXXX'}
Address: ${formData.address || 'Your Address'}

PROFESSIONAL SUMMARY:
${formData.summary || 'Add your professional summary here...'}

SKILLS:
${formData.skills || 'List your skills here...'}

WORK EXPERIENCE:
${formData.experience || 'Add your work experience here...'}

EDUCATION:
${formData.education || 'Add your education details here...'}

PROJECTS:
${formData.projects || 'Add your projects here...'}

Generated using JobFinder Resume Builder
    `;
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formData.name || 'Resume'}_${templates[selectedTemplate].name}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const defaultUser = {
    name: 'Resume Builder',
    email: 'user@example.com',
    role: 'Job Seeker'
  };

  return (
    <div className="App">
      <NaukriStyleHeader user={defaultUser} onLogout={() => console.log('Logout')} />
      
      <div className="resume-page">
        <div className="resume-container">
          <div className="resume-form">
            <h2>📄 Build Your Resume</h2>
            
            <div className="template-selector">
              <h3>Choose Template:</h3>
              <div className="template-options">
                {Object.entries(templates).map(([key, template]) => (
                  <button
                    key={key}
                    className={`template-btn ${selectedTemplate === key ? 'active' : ''}`}
                    onClick={() => setSelectedTemplate(key)}
                    style={{ borderColor: template.color }}
                  >
                    {template.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-sections">
              <div className="form-section">
                <h3>Personal Information</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-section">
                <h3>Professional Summary</h3>
                <textarea
                  name="summary"
                  placeholder="Write a brief professional summary..."
                  value={formData.summary}
                  onChange={handleInputChange}
                  rows="3"
                />
              </div>

              <div className="form-section">
                <h3>Skills</h3>
                <textarea
                  name="skills"
                  placeholder="List your skills (e.g., JavaScript, React, Node.js)"
                  value={formData.skills}
                  onChange={handleInputChange}
                  rows="3"
                />
              </div>

              <div className="form-section">
                <h3>Work Experience</h3>
                <textarea
                  name="experience"
                  placeholder="Add your work experience..."
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows="4"
                />
              </div>

              <div className="form-section">
                <h3>Education</h3>
                <textarea
                  name="education"
                  placeholder="Add your education details..."
                  value={formData.education}
                  onChange={handleInputChange}
                  rows="3"
                />
              </div>

              <div className="form-section">
                <h3>Projects</h3>
                <textarea
                  name="projects"
                  placeholder="Add your projects..."
                  value={formData.projects}
                  onChange={handleInputChange}
                  rows="4"
                />
              </div>
            </div>

            <div className="form-actions">
              <button className="download-btn" onClick={handleDownload}>
                📥 Download Resume
              </button>
              <button className="download-btn" onClick={handleSave} style={{ background: '#28a745', marginLeft: '1rem' }}>
                💾 Save to Profile
              </button>
              <button className="preview-btn" onClick={() => alert('Preview feature coming soon!')}>
                👁️ Preview
              </button>
            </div>
          </div>

          <div className="resume-preview">
            <div className="preview-container" style={{ borderColor: templates[selectedTemplate].color }}>
              <h3>Preview - {templates[selectedTemplate].name}</h3>
              <div className="preview-content">
                <h1 style={{ color: templates[selectedTemplate].color }}>
                  {formData.name || 'Your Name'}
                </h1>
                <div className="contact-info">
                  <p>{formData.email || 'your.email@example.com'}</p>
                  <p>{formData.phone || '+91 XXXXXXXXXX'}</p>
                  <p>{formData.address || 'Your Address'}</p>
                </div>
                
                {formData.summary && (
                  <div className="section">
                    <h3 style={{ color: templates[selectedTemplate].color }}>Summary</h3>
                    <p>{formData.summary}</p>
                  </div>
                )}
                
                {formData.skills && (
                  <div className="section">
                    <h3 style={{ color: templates[selectedTemplate].color }}>Skills</h3>
                    <p>{formData.skills}</p>
                  </div>
                )}
                
                {formData.experience && (
                  <div className="section">
                    <h3 style={{ color: templates[selectedTemplate].color }}>Experience</h3>
                    <p>{formData.experience}</p>
                  </div>
                )}
                
                {formData.education && (
                  <div className="section">
                    <h3 style={{ color: templates[selectedTemplate].color }}>Education</h3>
                    <p>{formData.education}</p>
                  </div>
                )}
                
                {formData.projects && (
                  <div className="section">
                    <h3 style={{ color: templates[selectedTemplate].color }}>Projects</h3>
                    <p>{formData.projects}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ResumePage;