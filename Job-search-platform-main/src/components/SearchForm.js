import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ setJobs, setLoading, setError, setHasSearched }) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!keyword.trim()) { setError('Please enter a job keyword'); return; }
    setLoading(true);
    setError('');
    setJobs([]);
    setHasSearched(true);
    setTimeout(() => {
      setJobs(generateJobs(keyword, location));
      setLoading(false);
    }, 600);
  };

  const generateJobs = (kw, loc) => {
    const companies = [
      'TechCorp Solutions', 'Innovation Labs', 'Global Tech Partners',
      'StartupHub', 'Enterprise Solutions', 'CloudFirst Technologies',
      'Digital Innovations Co', 'DataVision Inc', 'NextGen Systems', 'CodeBase Ltd'
    ];
    const locations = Array(10).fill(loc || 'Remote');
    const types = ['Full-time', 'Remote', 'Hybrid', 'Contract', 'Part-time'];
    const levels = ['Entry Level', 'Mid Level', 'Senior Level', 'Lead', 'Executive'];
    const titles = [
      `${kw} Developer`, `Senior ${kw} Engineer`, `${kw} Specialist`,
      `Junior ${kw} Developer`, `${kw} Team Lead`, `Full Stack ${kw} Developer`,
      `${kw} Architect`, `${kw} Consultant`, `${kw} Analyst`, `Principal ${kw} Engineer`
    ];
    return titles.map((title, i) => ({
      id: `search-${i}`,
      title,
      company: { display_name: companies[i % companies.length] },
      location: { display_name: locations[i % locations.length] },
      description: `We are looking for a skilled ${title} to join our team. You will work on exciting ${kw} projects with modern technologies, collaborate with cross-functional teams, and deliver high-quality solutions. Competitive salary and great benefits included.`,
      redirect_url: '#',
      salary_min: 50000 + i * 8000,
      salary_max: 90000 + i * 10000,
      jobType: types[i % types.length],
      experience: levels[i % levels.length]
    }));
  };

  const popularSearches = ['Java Developer', 'React Developer', 'Python Developer', 'Data Analyst', 'UI/UX Designer', 'Node.js', 'Full Stack', 'DevOps'];

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="🔍 Job title, e.g. Java Developer, React..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="search-input"
            autoFocus
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            placeholder="📍 City, state or Remote..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="search-input"
          />
        </div>

        {keyword && (
          <button type="button" className="clear-button" onClick={() => { setKeyword(''); setLocation(''); setJobs([]); setHasSearched(false); setError(''); }}>
            ✕ Clear
          </button>
        )}
        
        <button type="submit" className="search-button">
          🔍 Search Jobs
        </button>
      </form>

      <div className="popular-searches">
        <span className="popular-label">Popular:</span>
        {popularSearches.map((term) => (
          <button
            key={term}
            className="popular-chip"
            onClick={() => {
              setKeyword(term);
              setLoading(true);
              setError('');
              setJobs([]);
              setHasSearched(true);
              setTimeout(() => {
              setJobs(generateJobs(term, location));
                setLoading(false);
              }, 600);
            }}
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchForm;