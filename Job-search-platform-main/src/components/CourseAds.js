import React, { useState } from 'react';
import './CourseAds.css';

const CourseAds = ({ userSkills = [] }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const courses = [
    {
      id: 1, title: 'Full Stack Web Development', provider: 'TechEd Pro',
      duration: '6 months', price: '₹15,999', originalPrice: '₹29,999',
      rating: 4.8, students: '45K', image: '🚀',
      skills: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
      description: 'Master frontend & backend development with real projects'
    },
    {
      id: 2, title: 'Data Science & Machine Learning', provider: 'DataLearn',
      duration: '4 months', price: '₹12,999', originalPrice: '₹24,999',
      rating: 4.7, students: '38K', image: '📊',
      skills: ['Python', 'ML', 'SQL', 'TensorFlow'],
      description: 'Learn data analysis, visualization and ML algorithms'
    },
    {
      id: 3, title: 'Digital Marketing Mastery', provider: 'MarketPro',
      duration: '3 months', price: '₹8,999', originalPrice: '₹17,999',
      rating: 4.6, students: '52K', image: '📈',
      skills: ['SEO', 'Social Media', 'Google Ads', 'Analytics'],
      description: 'Grow brands online with proven digital marketing strategies'
    },
    {
      id: 4, title: 'Cloud Computing (AWS)', provider: 'CloudAcademy',
      duration: '5 months', price: '₹18,999', originalPrice: '₹35,999',
      rating: 4.9, students: '29K', image: '☁️',
      skills: ['AWS', 'Docker', 'Kubernetes', 'DevOps'],
      description: 'Get AWS certified and master cloud infrastructure'
    },
    {
      id: 5, title: 'UI/UX Design Bootcamp', provider: 'DesignHub',
      duration: '3 months', price: '₹10,999', originalPrice: '₹21,999',
      rating: 4.7, students: '33K', image: '🎨',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      description: 'Design beautiful and user-friendly digital products'
    },
    {
      id: 6, title: 'Java & Spring Boot', provider: 'CodeMaster',
      duration: '4 months', price: '₹13,999', originalPrice: '₹26,999',
      rating: 4.8, students: '41K', image: '☕',
      skills: ['Java', 'Spring Boot', 'REST API', 'Microservices'],
      description: 'Build enterprise-grade backend applications with Java'
    },
    {
      id: 7, title: 'Cybersecurity Fundamentals', provider: 'SecureIT',
      duration: '4 months', price: '₹16,999', originalPrice: '₹31,999',
      rating: 4.6, students: '18K', image: '🔐',
      skills: ['Network Security', 'Ethical Hacking', 'Linux', 'Cryptography'],
      description: 'Protect systems and networks from cyber threats'
    },
    {
      id: 8, title: 'Mobile App Development', provider: 'AppFactory',
      duration: '5 months', price: '₹17,999', originalPrice: '₹33,999',
      rating: 4.7, students: '27K', image: '📱',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      description: 'Build cross-platform mobile apps for iOS and Android'
    }
  ];

  const handleEnroll = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
      alert('🎉 Successfully enrolled! Check your email for course details.');
    }
  };

  return (
    <div className="course-ads">
      <div className="ads-header">
        <h3>🎯 Boost Your Skills</h3>
        <p>Upgrade your skills with top-rated courses and land your dream job faster!</p>
      </div>

      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <div className="course-image">{course.image}</div>
            <div className="course-content">
              <h4>{course.title}</h4>
              <p className="provider">🏫 {course.provider}</p>
              <p className="course-desc">{course.description}</p>
              <div className="course-details">
                <span className="duration">⏱️ {course.duration}</span>
                <span className="rating">⭐ {course.rating}</span>
                <span className="students">👥 {course.students} students</span>
              </div>
              <div className="skills-tags">
                {course.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
              <div className="course-footer">
                <div className="price-block">
                  <span className="price">{course.price}</span>
                  <span className="original-price">{course.originalPrice}</span>
                </div>
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
