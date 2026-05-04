import React, { useState } from 'react';
import NaukriStyleHeader from '../components/NaukriStyleHeader';

const SalaryPage = () => {
  const [salaryData] = useState([
    { role: 'Software Engineer', experience: '0-2 years', salary: '₹3-8 LPA', companies: 'TCS, Infosys, Wipro' },
    { role: 'Senior Developer', experience: '3-5 years', salary: '₹8-15 LPA', companies: 'Amazon, Microsoft, Google' },
    { role: 'Tech Lead', experience: '6-8 years', salary: '₹15-25 LPA', companies: 'Facebook, Netflix, Uber' },
    { role: 'Engineering Manager', experience: '8-12 years', salary: '₹25-40 LPA', companies: 'Apple, Tesla, SpaceX' },
    { role: 'Principal Engineer', experience: '10+ years', salary: '₹40-60 LPA', companies: 'FAANG, Unicorns' }
  ]);

  const [calculator, setCalculator] = useState({
    role: '',
    experience: '',
    location: '',
    skills: ''
  });

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      <NaukriStyleHeader user={{ name: 'Khushi Jha', email: 'khushi@example.com' }} />
      
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '2rem', color: '#333' }}>💰 Salary Insights</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', marginBottom: '2rem' }}>
              <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>📊 Salary Ranges by Role</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {salaryData.map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.5rem',
                    background: '#f8f9fa',
                    borderRadius: '6px',
                    borderLeft: '4px solid #28a745'
                  }}>
                    <div>
                      <h4 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>{item.role}</h4>
                      <div style={{ fontSize: '0.9rem', color: '#666' }}>
                        <div>{item.experience}</div>
                        <div style={{ marginTop: '0.25rem' }}>{item.companies}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#28a745' }}>
                        {item.salary}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
              <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>🧮 Salary Calculator</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <input
                  placeholder="Job Role (e.g., Software Engineer)"
                  value={calculator.role}
                  onChange={(e) => setCalculator({...calculator, role: e.target.value})}
                  style={{ padding: '0.75rem', border: '1px solid #e0e6ed', borderRadius: '6px' }}
                />
                <select
                  value={calculator.experience}
                  onChange={(e) => setCalculator({...calculator, experience: e.target.value})}
                  style={{ padding: '0.75rem', border: '1px solid #e0e6ed', borderRadius: '6px' }}
                >
                  <option value="">Select Experience</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-8">6-8 years</option>
                  <option value="8+">8+ years</option>
                </select>
                <input
                  placeholder="Location (e.g., Bangalore)"
                  value={calculator.location}
                  onChange={(e) => setCalculator({...calculator, location: e.target.value})}
                  style={{ padding: '0.75rem', border: '1px solid #e0e6ed', borderRadius: '6px' }}
                />
                <input
                  placeholder="Key Skills"
                  value={calculator.skills}
                  onChange={(e) => setCalculator({...calculator, skills: e.target.value})}
                  style={{ padding: '0.75rem', border: '1px solid #e0e6ed', borderRadius: '6px' }}
                />
              </div>
              <button style={{
                width: '100%',
                background: '#4a90e2',
                color: 'white',
                border: 'none',
                padding: '1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500'
              }} onClick={() => {
                if (calculator.role && calculator.experience) {
                  alert(`Estimated salary for ${calculator.role} (${calculator.experience} yrs) in ${calculator.location || 'India'}: ₹${calculator.experience === '0-2' ? '3-8' : calculator.experience === '3-5' ? '8-15' : calculator.experience === '6-8' ? '15-25' : '25-40'} LPA`);
                } else {
                  alert('Please fill in Role and Experience to calculate.');
                }
              }}>
                Calculate Salary Range
              </button>
            </div>
          </div>
          
          <div>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: '#333' }}>🏆 Top Paying Companies</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Google', 'Microsoft', 'Amazon', 'Facebook', 'Netflix'].map((company, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem',
                    border: '1px solid #e0e6ed',
                    borderRadius: '6px'
                  }}>
                    <span style={{ fontWeight: '500' }}>{company}</span>
                    <span style={{ color: '#28a745', fontWeight: 'bold' }}>
                      ₹{20 + index * 5}-{30 + index * 8} LPA
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ marginBottom: '1rem', color: '#333' }}>📈 Salary Trends</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ padding: '1rem', background: '#e8f5e8', borderRadius: '6px' }}>
                  <div style={{ fontWeight: 'bold', color: '#28a745' }}>↗️ +12%</div>
                  <div style={{ fontSize: '0.9rem', color: '#666' }}>Average salary increase this year</div>
                </div>
                <div style={{ padding: '1rem', background: '#fff3cd', borderRadius: '6px' }}>
                  <div style={{ fontWeight: 'bold', color: '#856404' }}>🔥 React</div>
                  <div style={{ fontSize: '0.9rem', color: '#666' }}>Most in-demand skill</div>
                </div>
                <div style={{ padding: '1rem', background: '#d1ecf1', borderRadius: '6px' }}>
                  <div style={{ fontWeight: 'bold', color: '#0c5460' }}>🏙️ Bangalore</div>
                  <div style={{ fontSize: '0.9rem', color: '#666' }}>Highest paying city</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryPage;