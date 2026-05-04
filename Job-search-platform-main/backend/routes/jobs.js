const express = require('express');
const Job = require('../models/Job');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all jobs (with optional search)
router.get('/', async (req, res) => {
  try {
    const { keyword, location } = req.query;
    const query = {};
    if (keyword) query.title = { $regex: keyword, $options: 'i' };
    if (location) query['location.display_name'] = { $regex: location, $options: 'i' };

    const jobs = await Job.find(query).sort({ createdAt: -1 });

    // if no DB results, return dynamic generated jobs
    if (jobs.length === 0 && keyword) {
      const companies = ['TechCorp Solutions','Innovation Labs','Global Tech Partners','StartupHub','Enterprise Solutions','CloudFirst Technologies','Digital Innovations','DataVision Inc','NextGen Systems','CodeBase Ltd'];
      const locs = [location||'Remote','San Francisco, CA','New York, NY','Austin, TX','Seattle, WA','Chicago, IL','Bangalore, India','Hyderabad, India','Pune, India','Mumbai, India'];
      const types = ['Full-time','Remote','Hybrid','Contract','Part-time'];
      const levels = ['Entry Level','Mid Level','Senior Level','Lead','Executive'];
      const titles = [`${keyword} Developer`,`Senior ${keyword} Engineer`,`${keyword} Specialist`,`Junior ${keyword} Developer`,`${keyword} Team Lead`,`Full Stack ${keyword} Developer`,`${keyword} Architect`,`${keyword} Consultant`,`${keyword} Analyst`,`Principal ${keyword} Engineer`];
      const generated = titles.map((title, i) => ({
        _id: `gen-${i}`,
        id: `gen-${i}`,
        title,
        company: { display_name: companies[i % companies.length] },
        location: { display_name: locs[i % locs.length] },
        description: `We are looking for a skilled ${title} to join our team. Work on exciting ${keyword} projects with modern technologies and competitive benefits.`,
        salary_min: 50000 + i * 8000,
        salary_max: 90000 + i * 10000,
        jobType: types[i % types.length],
        experience: levels[i % levels.length]
      }));
      return res.json(generated);
    }

    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single job
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Post a job (Recruiter/Admin only)
router.post('/', auth, async (req, res) => {
  try {
    if (req.user.role === 'Job Seeker') return res.status(403).json({ message: 'Not authorized' });
    const job = await Job.create({ ...req.body, postedBy: req.user.id });
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a job
router.delete('/:id', auth, async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: 'Job deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
