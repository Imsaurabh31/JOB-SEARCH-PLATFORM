const express = require('express');
const multer = require('multer');
const path = require('path');
const Application = require('../models/Application');
const auth = require('../middleware/auth');
const router = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Submit application
router.post('/', upload.fields([{ name: 'cv' }, { name: 'photo' }]), async (req, res) => {
  try {
    const { job, name, email, mobile, address } = req.body;
    const application = await Application.create({
      job,
      name,
      email,
      mobile,
      address,
      cvPath: req.files?.cv?.[0]?.filename,
      photoPath: req.files?.photo?.[0]?.filename,
      applicant: req.body.userId || null
    });
    res.status(201).json({ message: 'Application submitted successfully!', application });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all applications (Admin/Recruiter)
router.get('/', auth, async (req, res) => {
  try {
    if (req.user.role === 'Job Seeker') return res.status(403).json({ message: 'Not authorized' });
    const applications = await Application.find().populate('job', 'title company').sort({ createdAt: -1 });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update application status
router.patch('/:id/status', auth, async (req, res) => {
  try {
    const app = await Application.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json(app);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
