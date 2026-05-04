const express = require('express');
const Resume = require('../models/Resume');
const auth = require('../middleware/auth');
const router = express.Router();

// Save or update resume
router.post('/', auth, async (req, res) => {
  try {
    const resume = await Resume.findOneAndUpdate(
      { user: req.user.id },
      { ...req.body, user: req.user.id },
      { upsert: true, new: true }
    );
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get resume for logged-in user
router.get('/me', auth, async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user.id });
    res.json(resume || {});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
