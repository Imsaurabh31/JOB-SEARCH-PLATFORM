import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NaukriStyleHeader from '../components/NaukriStyleHeader';

const CompaniesPage = () => {
  const navigate = useNavigate();
  const [companies] = useState([
    { id: 1, name: 'TCS', rating: 4.1, reviews: '45.2K', employees: '500K+', logo: '🏢' },
    { id: 2, name: 'Infosys', rating: 4.0, reviews: '38.5K', employees: '250K+', logo: '💼' },
    { id: 3, name: 'Wipro', rating: 3.9, reviews: '32.1K', employees: '200K+', logo: '🏭' },
    { id: 4, name: 'Accenture', rating: 4.2, reviews: '28.7K', employees: '150K+', logo: '🏛️' },
    { id: 5, name: 'Cognizant', rating: 3.8, reviews: '25.3K', employees: '300K+', logo: '🏢' },
    { id: 6, name: 'HCL Tech', rating: 4.0, reviews: '22.1K', employees: '180K+', logo: '💻' }
  ]);

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      <NaukriStyleHeader user={{ name: 'Khushi Jha', email: 'khushi@example.com' }} />
      
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '2rem', color: '#333' }}>🏢 Top Companies</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {companies.map(company => (
            <div key={company.id} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e0e6ed'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ fontSize: '3rem' }}>{company.logo}</div>
                <div>
                  <h3 style={{ margin: 0, color: '#4a90e2' }}>{company.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <span style={{ color: '#ffc107' }}>★★★★☆</span>
                    <span style={{ fontWeight: 'bold' }}>{company.rating}</span>
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.9rem', color: '#666' }}>
                <span>{company.reviews} reviews</span>
                <span>{company.employees} employees</span>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button style={{
                  flex: 1,
                  background: '#4a90e2',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }} onClick={() => navigate('/', { state: { searchCompany: company.name } })}>
                  View Jobs
                </button>
                <button style={{
                  flex: 1,
                  background: '#f8f9fa',
                  color: '#333',
                  border: '1px solid #e0e6ed',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }} onClick={() => alert(`Reviews for ${company.name} coming soon!`)}>
                  Reviews
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesPage;