import React, { useState } from 'react';
import NaukriStyleHeader from '../components/NaukriStyleHeader';
import CareerTest from '../components/CareerTest';
import Footer from '../components/Footer';

const TestPage = () => {
  const defaultUser = {
    name: 'Student',
    email: 'student@example.com',
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
        <CareerTest />
      </div>
      
      <Footer />
    </div>
  );
};

export default TestPage;