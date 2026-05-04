import React, { useState } from 'react';
import './SkillTest.css';

const SkillTest = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [testStarted, setTestStarted] = useState(false);

  const skillTests = {
    javascript: {
      name: 'JavaScript',
      icon: '🟨',
      duration: '15 min',
      questions: [
        {
          question: "What is the output of: console.log(typeof null)?",
          options: ["null", "undefined", "object", "boolean"],
          correct: 2
        },
        {
          question: "Which method is used to add an element to the end of an array?",
          options: ["push()", "pop()", "shift()", "unshift()"],
          correct: 0
        },
        {
          question: "What does '===' operator do in JavaScript?",
          options: ["Assignment", "Equality without type checking", "Strict equality with type checking", "Not equal"],
          correct: 2
        },
        {
          question: "What is a closure in JavaScript?",
          options: ["A loop structure", "A function with access to outer scope", "An object method", "A variable declaration"],
          correct: 1
        },
        {
          question: "Which of these is NOT a JavaScript data type?",
          options: ["String", "Boolean", "Float", "Symbol"],
          correct: 2
        }
      ]
    },
    react: {
      name: 'React.js',
      icon: '⚛️',
      duration: '20 min',
      questions: [
        {
          question: "What is JSX in React?",
          options: ["A JavaScript library", "A syntax extension for JavaScript", "A CSS framework", "A database"],
          correct: 1
        },
        {
          question: "Which hook is used for state management in functional components?",
          options: ["useEffect", "useState", "useContext", "useReducer"],
          correct: 1
        },
        {
          question: "What is the virtual DOM?",
          options: ["A real DOM element", "A JavaScript representation of the real DOM", "A CSS selector", "An HTML template"],
          correct: 1
        },
        {
          question: "How do you pass data from parent to child component?",
          options: ["Using state", "Using props", "Using context", "Using refs"],
          correct: 1
        },
        {
          question: "What is the purpose of useEffect hook?",
          options: ["State management", "Side effects and lifecycle methods", "Event handling", "Component styling"],
          correct: 1
        }
      ]
    },
    nodejs: {
      name: 'Node.js',
      icon: '🟢',
      duration: '18 min',
      questions: [
        {
          question: "What is Node.js?",
          options: ["A JavaScript framework", "A JavaScript runtime environment", "A database", "A CSS preprocessor"],
          correct: 1
        },
        {
          question: "Which module is used to create a web server in Node.js?",
          options: ["fs", "http", "path", "url"],
          correct: 1
        },
        {
          question: "What is npm?",
          options: ["Node Package Manager", "New Programming Method", "Network Protocol Manager", "Node Process Manager"],
          correct: 0
        },
        {
          question: "Which method is used to read a file asynchronously in Node.js?",
          options: ["fs.readFileSync()", "fs.readFile()", "fs.openFile()", "fs.getFile()"],
          correct: 1
        },
        {
          question: "What is Express.js?",
          options: ["A database", "A web application framework for Node.js", "A CSS framework", "A testing library"],
          correct: 1
        }
      ]
    },
    python: {
      name: 'Python',
      icon: '🐍',
      duration: '15 min',
      questions: [
        {
          question: "What is the output of: print(type([]))?",
          options: ["<class 'array'>", "<class 'list'>", "<class 'tuple'>", "<class 'dict'>"],
          correct: 1
        },
        {
          question: "Which keyword is used to define a function in Python?",
          options: ["function", "def", "func", "define"],
          correct: 1
        },
        {
          question: "What is a list comprehension in Python?",
          options: ["A way to create lists", "A loop structure", "A function type", "A class method"],
          correct: 0
        },
        {
          question: "Which of these is mutable in Python?",
          options: ["String", "Tuple", "List", "Integer"],
          correct: 2
        },
        {
          question: "What does 'self' represent in Python classes?",
          options: ["A keyword", "The class itself", "The instance of the class", "A method"],
          correct: 2
        }
      ]
    },
    sql: {
      name: 'SQL',
      icon: '🗄️',
      duration: '12 min',
      questions: [
        {
          question: "Which SQL statement is used to extract data from a database?",
          options: ["GET", "SELECT", "EXTRACT", "OPEN"],
          correct: 1
        },
        {
          question: "What does JOIN do in SQL?",
          options: ["Combines rows from two or more tables", "Adds new columns", "Deletes records", "Updates data"],
          correct: 0
        },
        {
          question: "Which clause is used to filter records in SQL?",
          options: ["FILTER", "WHERE", "HAVING", "CONDITION"],
          correct: 1
        },
        {
          question: "What is a PRIMARY KEY?",
          options: ["A unique identifier for records", "A foreign reference", "An index", "A constraint"],
          correct: 0
        },
        {
          question: "Which SQL function returns the number of rows?",
          options: ["SUM()", "COUNT()", "AVG()", "MAX()"],
          correct: 1
        }
      ]
    },
    communication: {
      name: 'Communication Skills',
      icon: '💬',
      duration: '10 min',
      questions: [
        {
          question: "What is the most important aspect of effective communication?",
          options: ["Speaking loudly", "Active listening", "Using complex words", "Talking fast"],
          correct: 1
        },
        {
          question: "In a team meeting, what should you do if you disagree with someone?",
          options: ["Stay silent", "Interrupt immediately", "Wait for your turn and express respectfully", "Leave the meeting"],
          correct: 2
        },
        {
          question: "What is the best way to give feedback to a colleague?",
          options: ["In front of everyone", "Through email only", "Privately and constructively", "Never give feedback"],
          correct: 2
        },
        {
          question: "When writing professional emails, you should:",
          options: ["Use all caps for emphasis", "Keep it clear and concise", "Use lots of emojis", "Write very long paragraphs"],
          correct: 1
        },
        {
          question: "What does active listening involve?",
          options: ["Just hearing words", "Preparing your response while others speak", "Paying full attention and asking clarifying questions", "Multitasking while listening"],
          correct: 2
        }
      ]
    },
    problemsolving: {
      name: 'Problem Solving',
      icon: '🧩',
      duration: '15 min',
      questions: [
        {
          question: "What is the first step in problem-solving?",
          options: ["Implement a solution", "Identify and define the problem", "Brainstorm solutions", "Ask for help"],
          correct: 1
        },
        {
          question: "When facing a complex problem, what should you do?",
          options: ["Panic and give up", "Break it down into smaller parts", "Ignore it and hope it goes away", "Immediately ask your boss"],
          correct: 1
        },
        {
          question: "What is brainstorming?",
          options: ["Criticizing ideas immediately", "Generating many ideas without judgment", "Choosing the first idea", "Working alone only"],
          correct: 1
        },
        {
          question: "After implementing a solution, what should you do?",
          options: ["Move to the next problem", "Evaluate the results and learn", "Forget about it", "Blame others if it fails"],
          correct: 1
        },
        {
          question: "What is the best approach when you don't know how to solve a problem?",
          options: ["Give up immediately", "Research, ask questions, and seek guidance", "Guess randomly", "Wait for someone else to solve it"],
          correct: 1
        }
      ]
    },
    teamwork: {
      name: 'Teamwork & Collaboration',
      icon: '🤝',
      duration: '12 min',
      questions: [
        {
          question: "What makes a good team member?",
          options: ["Working alone always", "Being reliable and supportive", "Taking all the credit", "Avoiding responsibilities"],
          correct: 1
        },
        {
          question: "How should you handle conflicts in a team?",
          options: ["Ignore them", "Address them openly and respectfully", "Take sides immediately", "Complain to management"],
          correct: 1
        },
        {
          question: "What is the best way to contribute to team meetings?",
          options: ["Stay silent throughout", "Dominate the conversation", "Participate actively and listen to others", "Check your phone constantly"],
          correct: 2
        },
        {
          question: "When a team member is struggling, you should:",
          options: ["Ignore them", "Do their work for them", "Offer help and support", "Report them to the manager"],
          correct: 2
        },
        {
          question: "What does effective collaboration require?",
          options: ["Competition between team members", "Clear communication and shared goals", "Working in isolation", "Avoiding feedback"],
          correct: 1
        }
      ]
    },
    timemanagement: {
      name: 'Time Management',
      icon: '⏰',
      duration: '10 min',
      questions: [
        {
          question: "What is the most effective way to prioritize tasks?",
          options: ["Do easy tasks first", "Use urgent vs important matrix", "Do everything at once", "Wait until deadline"],
          correct: 1
        },
        {
          question: "How should you handle interruptions during focused work?",
          options: ["Always stop immediately", "Ignore everyone completely", "Politely ask to schedule a time to talk", "Get angry at the person"],
          correct: 2
        },
        {
          question: "What is a good practice for managing deadlines?",
          options: ["Wait until the last minute", "Break tasks into smaller chunks with mini-deadlines", "Hope you'll remember everything", "Only focus on one task at a time"],
          correct: 1
        },
        {
          question: "When planning your day, you should:",
          options: ["Plan every minute precisely", "Have no plan at all", "Set realistic goals with some buffer time", "Only plan work tasks"],
          correct: 2
        },
        {
          question: "What should you do if you're consistently missing deadlines?",
          options: ["Blame others", "Analyze your workflow and adjust", "Work longer hours only", "Ignore the problem"],
          correct: 1
        }
      ]
    }
  };

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill);
    setTestStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const startTest = () => {
    setTestStarted(true);
  };

  const handleAnswer = (answerIndex) => {
    const newAnswers = { ...answers, [currentQuestion]: answerIndex };
    setAnswers(newAnswers);

    if (currentQuestion < skillTests[selectedSkill].questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    const questions = skillTests[selectedSkill].questions;
    let correct = 0;
    
    questions.forEach((question, index) => {
      if (answers[index] === question.correct) {
        correct++;
      }
    });
    
    return Math.round((correct / questions.length) * 100);
  };

  const getScoreLevel = (score) => {
    if (score >= 80) return { level: 'Expert', color: '#10b981' };
    if (score >= 60) return { level: 'Advanced', color: '#3b82f6' };
    if (score >= 40) return { level: 'Intermediate', color: '#f59e0b' };
    return { level: 'Beginner', color: '#ef4444' };
  };

  const resetTest = () => {
    setSelectedSkill(null);
    setTestStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  if (!selectedSkill) {
    return (
      <div className="skill-test">
        <h2>🎯 Skill Assessment Tests</h2>
        <p>Choose a skill to test your knowledge and improve your profile</p>
        
        <div className="test-categories">
          <div className="category-section">
            <h3>💻 Technical Skills</h3>
            <div className="skills-grid">
              {Object.entries(skillTests).filter(([key]) => 
                ['javascript', 'react', 'nodejs', 'python', 'sql'].includes(key)
              ).map(([key, skill]) => (
                <div
                  key={key}
                  className="skill-card"
                  onClick={() => handleSkillSelect(key)}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                  <p>{skill.duration} • 5 Questions</p>
                  <button className="start-test-btn">Start Test</button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="category-section">
            <h3>🎯 Entry Level & Soft Skills</h3>
            <div className="skills-grid">
              {Object.entries(skillTests).filter(([key]) => 
                ['communication', 'problemsolving', 'teamwork', 'timemanagement'].includes(key)
              ).map(([key, skill]) => (
                <div
                  key={key}
                  className="skill-card entry-level"
                  onClick={() => handleSkillSelect(key)}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                  <p>{skill.duration} • 5 Questions</p>
                  <button className="start-test-btn">Start Test</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const score = calculateScore();
    const scoreLevel = getScoreLevel(score);
    
    return (
      <div className="skill-test">
        <div className="test-result">
          <h2>🎉 Test Complete!</h2>
          <div className="result-card">
            <div className="skill-header">
              <span className="skill-icon">{skillTests[selectedSkill].icon}</span>
              <h3>{skillTests[selectedSkill].name}</h3>
            </div>
            
            <div className="score-display">
              <div className="score-circle" style={{ borderColor: scoreLevel.color }}>
                <span className="score" style={{ color: scoreLevel.color }}>{score}%</span>
              </div>
              <div className="score-info">
                <h4 style={{ color: scoreLevel.color }}>{scoreLevel.level}</h4>
                <p>You got {Object.values(answers).filter((answer, index) => 
                  answer === skillTests[selectedSkill].questions[index].correct
                ).length} out of {skillTests[selectedSkill].questions.length} questions correct</p>
              </div>
            </div>
            
            <div className="result-actions">
              <button onClick={resetTest} className="retake-btn">
                Take Another Test
              </button>
              <button onClick={() => alert('Certificate feature coming soon!')} className="certificate-btn">
                Get Certificate
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!testStarted) {
    return (
      <div className="skill-test">
        <div className="test-intro">
          <button onClick={() => setSelectedSkill(null)} className="back-btn">
            ← Back to Skills
          </button>
          
          <div className="intro-card">
            <div className="skill-header">
              <span className="skill-icon">{skillTests[selectedSkill].icon}</span>
              <h2>{skillTests[selectedSkill].name} Test</h2>
            </div>
            
            <div className="test-info">
              <div className="info-item">
                <strong>Duration:</strong> {skillTests[selectedSkill].duration}
              </div>
              <div className="info-item">
                <strong>Questions:</strong> {skillTests[selectedSkill].questions.length}
              </div>
              <div className="info-item">
                <strong>Type:</strong> Multiple Choice
              </div>
            </div>
            
            <div className="test-rules">
              <h4>Test Rules:</h4>
              <ul>
                <li>Each question has 4 options with only 1 correct answer</li>
                <li>You cannot go back to previous questions</li>
                <li>No time limit per question</li>
                <li>Your score will be calculated automatically</li>
              </ul>
            </div>
            
            <button onClick={startTest} className="start-btn">
              Start {skillTests[selectedSkill].name} Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = skillTests[selectedSkill].questions[currentQuestion];
  
  return (
    <div className="skill-test">
      <div className="test-header">
        <div className="test-progress">
          <span>{skillTests[selectedSkill].name} Test</span>
          <span>Question {currentQuestion + 1} of {skillTests[selectedSkill].questions.length}</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestion + 1) / skillTests[selectedSkill].questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="question-card">
        <h3>{currentQ.question}</h3>
        <div className="options">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              className="option-btn"
              onClick={() => handleAnswer(index)}
            >
              <span className="option-letter">{String.fromCharCode(65 + index)}</span>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillTest;