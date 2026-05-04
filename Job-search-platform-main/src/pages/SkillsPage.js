import React, { useState } from 'react';
import NaukriStyleHeader from '../components/NaukriStyleHeader';
import SkillTest from '../components/SkillTest';
import Footer from '../components/Footer';

const SkillsPage = () => {
  const [skillTests] = useState([
    { id: 1, name: 'JavaScript', difficulty: 'Intermediate', duration: '45 min', participants: '2.3M', icon: '🟨' },
    { id: 2, name: 'React', difficulty: 'Advanced', duration: '60 min', participants: '1.8M', icon: '⚛️' },
    { id: 3, name: 'Python', difficulty: 'Beginner', duration: '30 min', participants: '3.1M', icon: '🐍' },
    { id: 4, name: 'Java', difficulty: 'Intermediate', duration: '50 min', participants: '2.7M', icon: '☕' },
    { id: 5, name: 'SQL', difficulty: 'Beginner', duration: '35 min', participants: '1.9M', icon: '🗃️' },
    { id: 6, name: 'Node.js', difficulty: 'Advanced', duration: '55 min', participants: '1.2M', icon: '🟢' }
  ]);

  const [mySkills] = useState([
    { name: 'JavaScript', score: 85, badge: 'Expert', color: '#28a745' },
    { name: 'React', score: 78, badge: 'Advanced', color: '#17a2b8' },
    { name: 'CSS', score: 72, badge: 'Advanced', color: '#17a2b8' },
    { name: 'Python', score: 45, badge: 'Beginner', color: '#6c757d' }
  ]);

  const defaultUser = {
    name: 'Skill Tester',
    email: 'user@example.com',
    role: 'Job Seeker'
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <div className="App">
      <NaukriStyleHeader 
        user={defaultUser}
        onLogout={handleLogout}
      />
      
      <div style={{ minHeight: 'calc(100vh - 200px)', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', padding: '2rem 0' }}>
        <SkillTest />
      </div>
      
      <Footer />
    </div>
  );
};

export default SkillsPage;