import React, { useState } from 'react';
import './CareerTest.css';

const CareerTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What type of work environment do you prefer?",
      options: [
        { text: "Building websites and applications", career: "web-dev" },
        { text: "Analyzing data and creating insights", career: "data-analytics" },
        { text: "Creating visual designs and user interfaces", career: "design" },
        { text: "Managing projects and teams", career: "management" }
      ]
    },
    {
      id: 2,
      question: "Which tools would you be most excited to learn?",
      options: [
        { text: "React, JavaScript, HTML/CSS", career: "web-dev" },
        { text: "Python, SQL, Tableau, Excel", career: "data-analytics" },
        { text: "Figma, Photoshop, Sketch", career: "design" },
        { text: "Jira, Slack, Microsoft Project", career: "management" }
      ]
    },
    {
      id: 3,
      question: "What motivates you most in your work?",
      options: [
        { text: "Creating functional digital products", career: "web-dev" },
        { text: "Finding patterns and solving problems with data", career: "data-analytics" },
        { text: "Making things beautiful and user-friendly", career: "design" },
        { text: "Leading teams to achieve goals", career: "management" }
      ]
    },
    {
      id: 4,
      question: "How do you prefer to solve problems?",
      options: [
        { text: "Writing code and debugging", career: "web-dev" },
        { text: "Analyzing data and creating reports", career: "data-analytics" },
        { text: "Sketching ideas and prototyping", career: "design" },
        { text: "Planning strategies and coordinating resources", career: "management" }
      ]
    },
    {
      id: 5,
      question: "What type of projects excite you most?",
      options: [
        { text: "Building responsive websites and web apps", career: "web-dev" },
        { text: "Creating dashboards and data visualizations", career: "data-analytics" },
        { text: "Designing mobile apps and brand identities", career: "design" },
        { text: "Leading product launches and team initiatives", career: "management" }
      ]
    }
  ];

  const careerResults = {
    "web-dev": {
      title: "Web Development",
      description: "You're perfect for web development! You enjoy building digital products and solving technical challenges.",
      jobs: ["Frontend Developer", "Full Stack Developer", "React Developer", "JavaScript Engineer"],
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Git"],
      salary: "₹4-15 LPA"
    },
    "data-analytics": {
      title: "Data Analytics",
      description: "Data analytics is your calling! You love finding insights and patterns in data to drive decisions.",
      jobs: ["Data Analyst", "Business Intelligence Analyst", "Data Scientist", "Analytics Consultant"],
      skills: ["Python", "SQL", "Excel", "Tableau", "Statistics"],
      salary: "₹5-18 LPA"
    },
    "design": {
      title: "UI/UX Design",
      description: "Design is your passion! You have an eye for aesthetics and user experience.",
      jobs: ["UI Designer", "UX Designer", "Product Designer", "Graphic Designer"],
      skills: ["Figma", "Photoshop", "User Research", "Prototyping", "Design Systems"],
      salary: "₹3-12 LPA"
    },
    "management": {
      title: "Project Management",
      description: "You're a natural leader! You excel at coordinating teams and delivering results.",
      jobs: ["Project Manager", "Product Manager", "Scrum Master", "Team Lead"],
      skills: ["Leadership", "Agile", "Communication", "Planning", "Risk Management"],
      salary: "₹6-20 LPA"
    }
  };

  const handleAnswer = (option) => {
    const newAnswers = { ...answers, [currentQuestion]: option.career };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendedCareer = () => {
    const careerCounts = {};
    Object.values(answers).forEach(career => {
      careerCounts[career] = (careerCounts[career] || 0) + 1;
    });
    
    return Object.keys(careerCounts).reduce((a, b) => 
      careerCounts[a] > careerCounts[b] ? a : b
    );
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  if (showResult) {
    const recommendedCareer = getRecommendedCareer();
    const result = careerResults[recommendedCareer];

    return (
      <div className="career-test">
        <div className="test-result">
          <h2>🎯 Your Career Match</h2>
          <div className="result-card">
            <h3>{result.title}</h3>
            <p>{result.description}</p>
            
            <div className="result-section">
              <h4>💼 Recommended Jobs:</h4>
              <div className="job-tags">
                {result.jobs.map((job, index) => (
                  <span key={index} className="job-tag">{job}</span>
                ))}
              </div>
            </div>
            
            <div className="result-section">
              <h4>🛠️ Skills to Learn:</h4>
              <div className="skill-tags">
                {result.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="result-section">
              <h4>💰 Expected Salary:</h4>
              <span className="salary">{result.salary}</span>
            </div>
            
            <div className="result-actions">
              <button onClick={resetTest} className="retake-btn">
                Retake Test
              </button>
              <button className="search-jobs-btn">
                Search {result.title} Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="career-test">
      <div className="test-header">
        <h2>🎯 Career Path Finder</h2>
        <p>Discover your ideal career based on your interests and preferences</p>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <span className="progress-text">
          Question {currentQuestion + 1} of {questions.length}
        </span>
      </div>

      <div className="question-card">
        <h3>{questions[currentQuestion].question}</h3>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className="option-btn"
              onClick={() => handleAnswer(option)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerTest;