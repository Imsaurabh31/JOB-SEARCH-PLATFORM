import React, { useState } from 'react';
import './JobFilters.css';

const JobFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    experience: [],
    salary: '',
    location: [],
    jobType: [],
    company: []
  });

  const experienceLevels = ['0-1 years', '1-3 years', '3-5 years', '5-10 years', '10+ years'];
  const salaryRanges = ['0-3 Lakhs', '3-6 Lakhs', '6-10 Lakhs', '10-15 Lakhs', '15+ Lakhs'];
  const jobTypes = ['Full Time', 'Part Time', 'Contract', 'Internship', 'Remote'];
  const topLocations = ['Bangalore', 'Mumbai', 'Delhi', 'Pune', 'Hyderabad', 'Chennai'];

  const handleFilterChange = (category, value) => {
    const newFilters = { ...filters };
    
    if (Array.isArray(newFilters[category])) {
      if (newFilters[category].includes(value)) {
        newFilters[category] = newFilters[category].filter(item => item !== value);
      } else {
        newFilters[category] = [...newFilters[category], value];
      }
    } else {
      newFilters[category] = value;
    }
    
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      experience: [],
      salary: '',
      location: [],
      jobType: [],
      company: []
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="job-filters">
      <div className="filters-header">
        <h3>All Filters</h3>
        <button onClick={clearFilters} className="clear-filters">Clear all</button>
      </div>

      <div className="filter-section">
        <h4>Experience</h4>
        <div className="filter-options">
          {experienceLevels.map(level => (
            <label key={level} className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.experience.includes(level)}
                onChange={() => handleFilterChange('experience', level)}
              />
              <span className="checkmark"></span>
              {level}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Salary</h4>
        <div className="filter-options">
          {salaryRanges.map(range => (
            <label key={range} className="filter-radio">
              <input
                type="radio"
                name="salary"
                checked={filters.salary === range}
                onChange={() => handleFilterChange('salary', range)}
              />
              <span className="radiomark"></span>
              {range}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Location</h4>
        <div className="filter-options">
          {topLocations.map(location => (
            <label key={location} className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.location.includes(location)}
                onChange={() => handleFilterChange('location', location)}
              />
              <span className="checkmark"></span>
              {location}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Job Type</h4>
        <div className="filter-options">
          {jobTypes.map(type => (
            <label key={type} className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.jobType.includes(type)}
                onChange={() => handleFilterChange('jobType', type)}
              />
              <span className="checkmark"></span>
              {type}
            </label>
          ))}
        </div>
      </div>

      <div className="active-filters">
        {Object.entries(filters).map(([key, value]) => {
          if (Array.isArray(value) && value.length > 0) {
            return value.map(item => (
              <span key={`${key}-${item}`} className="filter-tag">
                {item}
                <button onClick={() => handleFilterChange(key, item)}>×</button>
              </span>
            ));
          } else if (value && !Array.isArray(value)) {
            return (
              <span key={key} className="filter-tag">
                {value}
                <button onClick={() => handleFilterChange(key, '')}>×</button>
              </span>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default JobFilters;