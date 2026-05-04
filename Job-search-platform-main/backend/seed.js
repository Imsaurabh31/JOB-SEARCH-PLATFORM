const mongoose = require('mongoose');
require('dotenv').config();

const Job = require('./models/Job');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

const seedJobs = [
  { title: 'React Developer', company: { display_name: 'TechCorp Solutions' }, location: { display_name: 'Remote' }, description: 'Join our team as a React developer and work on exciting projects with modern technologies.', salary_min: 65000, salary_max: 95000, jobType: 'Remote', experience: 'Mid Level', skills: ['React', 'JavaScript', 'CSS'] },
  { title: 'Full Stack Developer', company: { display_name: 'Innovation Labs' }, location: { display_name: 'San Francisco, CA' }, description: 'Build end-to-end applications with modern frameworks in a fast-paced startup environment.', salary_min: 75000, salary_max: 115000, jobType: 'Full-time', experience: 'Senior Level', skills: ['React', 'Node.js', 'MongoDB'] },
  { title: 'Frontend Engineer', company: { display_name: 'Digital Solutions' }, location: { display_name: 'New York, NY' }, description: 'Create amazing user experiences with cutting-edge frontend technologies.', salary_min: 70000, salary_max: 110000, jobType: 'Hybrid', experience: 'Mid Level', skills: ['HTML', 'CSS', 'JavaScript'] },
  { title: 'Data Analytics Specialist', company: { display_name: 'DataInsights Corp' }, location: { display_name: 'Chicago, IL' }, description: 'Analyze complex datasets to drive business decisions using Python, SQL, and visualization tools.', salary_min: 80000, salary_max: 120000, jobType: 'Full-time', experience: 'Senior Level', skills: ['Python', 'SQL', 'Tableau'] },
  { title: 'Node.js Backend Developer', company: { display_name: 'CloudFirst Tech' }, location: { display_name: 'Remote' }, description: 'Design and build scalable REST APIs and microservices using Node.js and MongoDB.', salary_min: 70000, salary_max: 105000, jobType: 'Remote', experience: 'Mid Level', skills: ['Node.js', 'Express', 'MongoDB'] },
  { title: 'UI/UX Designer', company: { display_name: 'DesignHub' }, location: { display_name: 'Bangalore' }, description: 'Design beautiful and intuitive user interfaces for web and mobile applications.', salary_min: 50000, salary_max: 80000, jobType: 'Full-time', experience: 'Entry Level', skills: ['Figma', 'Adobe XD', 'CSS'] }
];

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Connected to MongoDB');

  await Job.deleteMany({});
  await Job.insertMany(seedJobs);
  console.log('✅ Jobs seeded');

  await User.deleteMany({});
  const hashed = await bcrypt.hash('password123', 10);
  await User.create([
    { name: 'Khushi Jha', email: 'khushi@example.com', password: hashed, role: 'Job Seeker', skills: ['React', 'JavaScript', 'CSS'] },
    { name: 'Admin User', email: 'admin@jobfinder.com', password: hashed, role: 'Admin', skills: [] },
    { name: 'Sarah Johnson', email: 'sarah@recruiter.com', password: hashed, role: 'Recruiter', skills: [] }
  ]);
  console.log('✅ Users seeded');
  console.log('\nTest credentials:');
  console.log('  Job Seeker → khushi@example.com / password123');
  console.log('  Admin      → admin@jobfinder.com / password123');
  console.log('  Recruiter  → sarah@recruiter.com / password123');

  mongoose.disconnect();
}

seed().catch(console.error);
