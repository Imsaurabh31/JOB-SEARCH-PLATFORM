import React, { useState } from 'react';
import './ResumeBuilder.css';

const ResumeBuilder = () => {
  const [resumeScore, setResumeScore] = useState(65);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showTemplates, setShowTemplates] = useState(false);
  
  const templates = [
    { id: 1, name: 'Professional', preview: '📋', description: 'Clean and formal design' },
    { id: 2, name: 'Modern', preview: '🎨', description: 'Contemporary layout with colors' },
    { id: 3, name: 'Creative', preview: '✨', description: 'Unique design for creative roles' },
    { id: 4, name: 'Minimal', preview: '📝', description: 'Simple and elegant' },
    { id: 5, name: 'Executive', preview: '💼', description: 'For senior positions' },
    { id: 6, name: 'Tech', preview: '💻', description: 'Perfect for developers' }
  ];
  
  const handleImproveResume = () => {
    setShowTemplates(true);
  };
  
  const handleDownloadResume = () => {
    if (selectedTemplate) {
      // Create a simple resume content
      const resumeContent = `
=== RESUME ===
Template: ${selectedTemplate.name}
Name: John Doe
Email: john.doe@email.com
Phone: +91 9876543210

SKILLS:
- JavaScript, React, Node.js
- HTML, CSS, Bootstrap
- MongoDB, MySQL
- Git, GitHub

EXPERIENCE:
Software Developer (2022-Present)
- Developed web applications using React
- Collaborated with cross-functional teams

EDUCATION:
B.Tech Computer Science (2018-2022)
XYZ University

Generated using JobFinder Resume Builder
      `;
      
      const blob = new Blob([resumeContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Resume_${selectedTemplate.name}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      alert(`✅ ${selectedTemplate.name} resume downloaded successfully!`);
    } else {
      alert('Please select a template first!');
    }
  };
  
  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setResumeScore(Math.min(resumeScore + 10, 95));
  };

  return (
    <div className="resume-builder">
      <h3>📄 Resume Builder</h3>
      <div className="resume-score">
        <div className="score-circle">
          <span className="score">{resumeScore}%</span>
          <span className="label">Resume Score</span>
        </div>
        <div className="score-info">
          <p>Your resume needs improvement</p>
          <ul>
            <li>Add more skills</li>
            <li>Include project details</li>
            <li>Update work experience</li>
          </ul>
        </div>
      </div>
      <div className="resume-actions">
        <button className="primary" onClick={handleImproveResume}>
          Improve Resume
        </button>
        <button className="secondary" onClick={handleDownloadResume}>
          Download Resume
        </button>
      </div>
      
      {showTemplates && (
        <div className="resume-templates">
          <h4>Choose Your Template</h4>
          <div className="templates-grid">
            {templates.map((template) => (
              <div 
                key={template.id}
                className={`template ${selectedTemplate?.id === template.id ? 'selected' : ''}`}
                onClick={() => handleTemplateSelect(template)}
              >
                <div className="template-preview">{template.preview}</div>
                <div className="template-name">{template.name}</div>
                <div className="template-desc">{template.description}</div>
              </div>
            ))}
          </div>
          {selectedTemplate && (
            <div className="selected-template-info">
              <p>✅ Selected: {selectedTemplate.name} template</p>
              <button className="use-template" onClick={() => {
                alert(`🚀 Opening ${selectedTemplate.name} resume builder...`);
                window.open('/resume', '_blank');
              }}>
                Build Resume
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResumeBuilder;