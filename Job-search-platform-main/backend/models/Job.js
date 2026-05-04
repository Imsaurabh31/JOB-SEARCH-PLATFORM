const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { display_name: String },
  location: { display_name: String },
  description: { type: String, required: true },
  salary_min: Number,
  salary_max: Number,
  jobType: { type: String, enum: ['Full-time', 'Part-time', 'Remote', 'Hybrid', 'Contract'], default: 'Full-time' },
  experience: { type: String, default: 'Entry Level' },
  skills: [String],
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  redirect_url: String
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
