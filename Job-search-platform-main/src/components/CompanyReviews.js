import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CompanyReviews.css';

const CompanyReviews = () => {
  const navigate = useNavigate();
  const reviews = [
    { company: 'TCS', rating: 4.1, reviews: '45.2K', salaries: '1.2L' },
    { company: 'Infosys', rating: 4.0, reviews: '38.5K', salaries: '95K' },
    { company: 'Wipro', rating: 3.9, reviews: '32.1K', salaries: '87K' }
  ];

  return (
    <div className="company-reviews">
      <h3>🏢 Company Reviews</h3>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-card" onClick={() => navigate('/companies')} style={{ cursor: 'pointer' }}>
            <div className="company-info">
              <h4>{review.company}</h4>
              <div className="rating">
                <span className="stars">★★★★☆</span>
                <span>{review.rating}</span>
              </div>
            </div>
            <div className="review-stats">
              <span>{review.reviews} reviews</span>
              <span>{review.salaries} salaries</span>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all" onClick={() => navigate('/companies')}>View All Companies</button>
    </div>
  );
};

export default CompanyReviews;