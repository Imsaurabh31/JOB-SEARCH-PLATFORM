const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  email: String,
  phone: String,
  address: String,
  summary: String,
  skills: String,
  experience: String,
  education: String,
  projects: String,
  template: { type: String, default: 'professional' }
}, { timestamps: true });

module.exports = mongoose.model('Resume', resumeSchema);
