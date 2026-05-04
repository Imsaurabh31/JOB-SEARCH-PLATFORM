import React, { useState } from 'react';
import './CourseAds.css';

const CourseAds = ({ userSkills = [], searchedRole = '' }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      provider: 'TechEd Pro',
      duration: '6 months',
      price: '₹15,999',
      rating: 4.8,
      skills: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
      image: '🚀'
    },
    {
      id: 2,
      title: 'Data Science & Analytics',
      provider: 'DataLearn',
      duration: '4 months',
      price: '₹12,999',
      rating: 4.7,
      skills: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
      image: '📊'
    },
    {
      id: 3,
      title: 'Digital Marketing Mastery',
      provider: 'MarketPro',
      duration: '3 months',
      price: '₹8,999',
      rating: 4.6,
      skills: ['SEO', 'Social Media', 'Google Ads', 'Analytics'],
      image: '📈'
    },
    {
      id: 4,
      title: 'Cloud Computing (AWS)',
      provider: 'CloudAcademy',
      duration: '5 months',
      price: '₹18,999',
      rating: 4.9,
      skills: ['AWS', 'Docker', 'Kubernetes', 'DevOps'],
      image: '☁️'
    }
  ];

  const handleEnroll = (courseId) => {
    setEnrolledCourses([...enrolledCourses, courseId]);
  };

  return (
    <div className="course-ads">
      <div className="ads-header">
        <h3>🎯 Boost Your Skills</h3>
        <p>Can't find the perfect job? Upgrade your skills with these courses!</p>
      </div>
      
      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <div className="course-image">{course.image}</div>
            <div className="course-content">
              <h4>{course.title}</h4>
              <p className="provider">{course.provider}</p>
              <div className="course-details">
                <span className="duration">⏱️ {course.duration}</span>
                <span className="rating">⭐ {course.rating}</span>
              </div>
              <div className="skills-tags">
                {course.skills.slice(0, 3).map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
              <div className="course-footer">
                <span className="price">{course.price}</span>
                <button 
                  className={`enroll-btn ${enrolledCourses.includes(course.id) ? 'enrolled' : ''}`}
                  onClick={() => handleEnroll(course.id)}
                  disabled={enrolledCourses.includes(course.id)}
                >
                  {enrolledCourses.includes(course.id) ? '✅ Enrolled' : 'Enroll Now'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseAds;