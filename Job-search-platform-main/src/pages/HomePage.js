import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import JobList from '../components/JobList';
import QuickApply from '../components/QuickApply';
import ChatSystem from '../components/ChatSystem';
import CallSystem from '../components/CallSystem';
import NaukriStyleHeader from '../components/NaukriStyleHeader';

import JobAlerts from '../components/JobAlerts';
import CompanyReviews from '../components/CompanyReviews';
import SalaryInsights from '../components/SalaryInsights';
import ResumeBuilder from '../components/ResumeBuilder';
import SkillAssessment from '../components/SkillAssessment';
import JobStats from '../components/JobStats';
import CourseAds from '../components/CourseAds';
import Footer from '../components/Footer';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import ContentFiller from '../components/ContentFiller';
import '../App.css';

function HomePage({ user, onLogout }) {
  const [jobs, setJobs] = useState([
    {
      id: 'default-1',
      title: 'React Developer',
      company: { display_name: 'TechCorp Solutions' },
      location: { display_name: 'Remote' },
      description: 'Join our team as a React developer and work on exciting projects with modern technologies.',
      redirect_url: 'https://example.com/job1',
      salary_min: 65000,
      salary_max: 95000
    },
    {
      id: 'default-2',
      title: 'Full Stack Developer',
      company: { display_name: 'Innovation Labs' },
      location: { display_name: 'San Francisco, CA' },
      description: 'Build end-to-end applications with modern frameworks in a fast-paced startup environment.',
      redirect_url: 'https://example.com/job2',
      salary_min: 75000,
      salary_max: 115000
    },
    {
      id: 'default-3',
      title: 'Frontend Engineer',
      company: { display_name: 'Digital Solutions' },
      location: { display_name: 'New York, NY' },
      description: 'Create amazing user experiences with cutting-edge frontend technologies.',
      redirect_url: 'https://example.com/job3',
      salary_min: 70000,
      salary_max: 110000
    },
    {
      id: 'default-4',
      title: 'Data Analytics Specialist',
      company: { display_name: 'DataInsights Corp' },
      location: { display_name: 'Chicago, IL' },
      description: 'Analyze complex datasets to drive business decisions using Python, SQL, and visualization tools.',
      redirect_url: 'https://example.com/job4',
      salary_min: 80000,
      salary_max: 120000
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showQuickApply, setShowQuickApply] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showCall, setShowCall] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);


  const handleQuickApply = (job) => {
    setSelectedJob(job);
    setShowQuickApply(true);
  };

  const handleApplicationSuccess = () => {
    setShowQuickApply(false);
    alert('🎉 Application sent successfully!');
  };

  const handleChatWithRecruiter = () => {
    setShowChat(true);
  };

  const handleStartCall = () => {
    setShowCall(true);
  };



  return (
    <div className="App">
      <NaukriStyleHeader 
        user={user || { name: 'Khushi Jha', email: 'khushi@example.com' }}
        onLogout={onLogout || (() => console.log('Logout'))}
      />
      
      <JobStats />
      
      <div className="page-container">
        <aside className="left-sidebar">
          <LeftSidebar user={user} />
        </aside>
        
        <main className="main-content">
          <div className="search-section">
            <SearchForm 
              setJobs={setJobs}
              setLoading={setLoading}
              setError={setError}
              setHasSearched={setHasSearched}
            />
          </div>
          
          <div className="content-area">
            <div className="naukri-features">
              <ResumeBuilder />
              <SkillAssessment />
            </div>
            
            {error && (
              <div className="error-message">
                <p>⚠️ {error}</p>
              </div>
            )}
            
            <JobList 
              jobs={jobs} 
              loading={loading} 
              onQuickApply={handleQuickApply}
              onChatWithRecruiter={handleChatWithRecruiter}
              hasSearched={hasSearched}
            />
            
            {(!loading && jobs.length === 0 && hasSearched) && (
              <div className="no-jobs-content">
                <CourseAds userSkills={user?.skills || []} />
                <ContentFiller />
              </div>
            )}
            
            {(!loading && jobs.length > 0) && (
              <ContentFiller />
            )}
          </div>
        </main>
        
        <aside className="right-sidebar">
          <div className="sidebar-section">
            <CourseAds userSkills={user?.skills || []} />
          </div>
          <RightSidebar />
          <div className="sidebar-section">
            <JobAlerts />
          </div>
          <div className="sidebar-section">
            <CompanyReviews />
          </div>
          <div className="sidebar-section">
            <SalaryInsights />
          </div>
        </aside>
      </div>
      
      {showQuickApply && (
        <QuickApply
          job={selectedJob}
          onClose={() => setShowQuickApply(false)}
          onSuccess={handleApplicationSuccess}
        />
      )}
      
      <ChatSystem
        isOpen={showChat}
        onClose={() => setShowChat(false)}
        recipientName="Sarah Johnson"
        recipientRole="Recruiter"
      />
      
      <CallSystem
        isActive={showCall}
        onEnd={() => setShowCall(false)}
        callerName="Sarah Johnson"
        isVideo={false}
      />
      
      <div className="floating-actions">
        <button 
          className="chat-float-btn"
          onClick={() => setShowChat(true)}
          title="Chat with Recruiter"
        >
          💬
        </button>
        <button 
          className="call-float-btn"
          onClick={() => setShowCall(true)}
          title="Call Recruiter"
        >
          📞
        </button>
      </div>
      
      <Footer />
    </div>
  );
}

export default HomePage;