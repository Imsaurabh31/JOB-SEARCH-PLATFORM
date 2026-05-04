const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  address: String,
  cvPath: String,
  photoPath: String,
  status: { type: String, enum: ['Pending', 'Reviewed', 'Shortlisted', 'Rejected'], default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
