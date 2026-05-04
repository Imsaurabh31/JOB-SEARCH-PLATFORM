import React from 'react';
import { useNavigate } from 'react-router-dom';
import NaukriStyleHeader from '../components/NaukriStyleHeader';

const ServicesPage = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: 'Resume Writing',
      description: 'Professional resume writing by experts',
      price: '₹2,999',
      features: ['ATS-friendly format', 'Industry-specific keywords', '2 revisions', '48-hour delivery'],
      icon: '📄'
    },
    {
      title: 'Interview Preparation',
      description: '1-on-1 mock interviews with industry experts',
      price: '₹1,999',
      features: ['Technical & HR rounds', 'Detailed feedback', 'Industry insights', 'Confidence building'],
      icon: '🎯'
    },
    {
      title: 'Career Counseling',
      description: 'Personalized career guidance and planning',
      price: '₹3,999',
      features: ['Career roadmap', 'Skill gap analysis', 'Industry trends', 'Growth strategy'],
      icon: '🚀'
    },
    {
      title: 'LinkedIn Optimization',
      description: 'Optimize your LinkedIn profile for better visibility',
      price: '₹1,499',
      features: ['Profile optimization', 'Keyword integration', 'Network building tips', 'Content strategy'],
      icon: '💼'
    },
    {
      title: 'Skill Certification',
      description: 'Industry-recognized skill certifications',
      price: '₹4,999',
      features: ['Online courses', 'Hands-on projects', 'Industry certification', 'Job placement support'],
      icon: '🏆'
    },
    {
      title: 'Job Search Assistance',
      description: 'Dedicated job search support and guidance',
      price: '₹2,499',
      features: ['Job matching', 'Application tracking', 'Follow-up support', 'Negotiation tips'],
      icon: '🔍'
    }
  ];

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      <NaukriStyleHeader user={{ name: 'Khushi Jha', email: 'khushi@example.com' }} />
      
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ marginBottom: '1rem', color: '#333' }}>🛠️ Career Services</h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Accelerate your career with our professional services designed to help you land your dream job
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {services.map((service, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e0e6ed',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
              
              <h3 style={{ margin: '0 0 1rem 0', color: '#333', fontSize: '1.3rem' }}>
                {service.title}
              </h3>
              
              <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {service.description}
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#28a745', marginBottom: '0.5rem' }}>
                  {service.price}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>One-time payment</div>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ margin: '0 0 1rem 0', color: '#333', fontSize: '1rem' }}>What's included:</h4>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#666' }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button style={{
                  flex: 1,
                  background: '#4a90e2',
                  color: 'white',
                  border: 'none',
                  padding: '1rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: '1rem'
                }} onClick={() => alert(`You selected: ${service.title}. Our team will contact you shortly!`)}>
                  Get Started
                </button>
                <button style={{
                  background: 'transparent',
                  color: '#4a90e2',
                  border: '2px solid #4a90e2',
                  padding: '1rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }} onClick={() => alert(`${service.title}: ${service.description}\n\nIncludes:\n${service.features.join('\n')}`)}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ 
          background: 'linear-gradient(135deg, #4a90e2, #357abd)', 
          color: 'white', 
          padding: '3rem 2rem', 
          borderRadius: '12px', 
          textAlign: 'center',
          marginTop: '3rem'
        }}>
          <h2 style={{ margin: '0 0 1rem 0' }}>🎯 Need Custom Career Support?</h2>
          <p style={{ margin: '0 0 2rem 0', fontSize: '1.1rem', opacity: 0.9 }}>
            Get personalized career guidance tailored to your specific needs and goals
          </p>
          <button style={{
            background: 'white',
            color: '#4a90e2',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '1rem'
          }} onClick={() => navigate('/apply')}>
            Contact Career Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;