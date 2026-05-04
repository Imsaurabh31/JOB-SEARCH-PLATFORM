import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ApplicationPage from './pages/ApplicationPage';
import JobDetailPage from './pages/JobDetailPage';
import Dashboard from './components/Dashboard';
import Recommendations from './components/Recommendations';
import TestPage from './pages/TestPage';
import CompaniesPage from './pages/CompaniesPage';
import SkillsPage from './pages/SkillsPage';
import SalaryPage from './pages/SalaryPage';
import ServicesPage from './pages/ServicesPage';
import ResumePage from './pages/ResumePage';
import ShowcasePage from './pages/ShowcasePage';
import './App.css';

function App() {
  const defaultUser = {
    name: 'Khushi Jha',
    email: 'khushi@example.com',
    role: 'Job Seeker',
    skills: ['React', 'JavaScript', 'CSS']
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage user={defaultUser} onLogout={handleLogout} />} />
        <Route path="/dashboard" element={<Dashboard userRole={defaultUser.role} onLogout={handleLogout} />} />
        <Route path="/recommendations" element={<Recommendations userSkills={defaultUser.skills} />} />
        <Route path="/home" element={<HomePage user={defaultUser} onLogout={handleLogout} />} />
        <Route path="/job-detail" element={<JobDetailPage />} />
        <Route path="/apply" element={<ApplicationPage />} />
        <Route path="/jobs" element={<HomePage user={defaultUser} onLogout={handleLogout} />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/salary" element={<SalaryPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
      </Routes>
    </Router>
  );
}

export default App;