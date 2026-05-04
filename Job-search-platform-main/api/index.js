const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../backend/.env') });

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../backend/uploads')));

app.use('/api/auth', require('../backend/routes/auth'));
app.use('/api/jobs', require('../backend/routes/jobs'));
app.use('/api/applications', require('../backend/routes/applications'));
app.use('/api/resumes', require('../backend/routes/resumes'));

app.get('/api/health', (req, res) => res.json({ status: 'Backend running ✅' }));

let isConnected = false;
const connectDB = async () => {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
};

module.exports = async (req, res) => {
  await connectDB();
  return app(req, res);
};
