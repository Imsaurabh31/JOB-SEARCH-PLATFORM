import React from 'react';
import ProjectShowcase from '../components/ProjectShowcase';
import NaukriStyleHeader from '../components/NaukriStyleHeader';
import Footer from '../components/Footer';

const ShowcasePage = () => {
  const defaultUser = {
    name: 'Project Showcase',
    email: 'showcase@jobfinder.com',
    role: 'Visitor'
  };

  return (
    <div className="showcase-page">
      <NaukriStyleHeader 
        user={defaultUser}
        onLogout={() => console.log('Showcase logout')}
      />
      <ProjectShowcase />
      <Footer />
    </div>
  );
};

export default ShowcasePage;