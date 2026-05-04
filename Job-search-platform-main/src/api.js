const BASE_URL = 'http://localhost:5000/api';

const getToken = () => localStorage.getItem('token');

const headers = (isFormData = false) => {
  const h = { Authorization: `Bearer ${getToken()}` };
  if (!isFormData) h['Content-Type'] = 'application/json';
  return h;
};

// Auth
export const registerUser = (data) =>
  fetch(`${BASE_URL}/auth/register`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(r => r.json());

export const loginUser = (data) =>
  fetch(`${BASE_URL}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(r => r.json());

// Jobs
export const fetchJobs = (keyword = '', location = '') =>
  fetch(`${BASE_URL}/jobs?keyword=${keyword}&location=${location}`).then(r => r.json());

export const postJob = (data) =>
  fetch(`${BASE_URL}/jobs`, { method: 'POST', headers: headers(), body: JSON.stringify(data) }).then(r => r.json());

// Applications
export const submitApplication = (formData) =>
  fetch(`${BASE_URL}/applications`, { method: 'POST', headers: { Authorization: `Bearer ${getToken()}` }, body: formData }).then(r => r.json());

export const fetchApplications = () =>
  fetch(`${BASE_URL}/applications`, { headers: headers() }).then(r => r.json());

// Resume
export const saveResume = (data) =>
  fetch(`${BASE_URL}/resumes`, { method: 'POST', headers: headers(), body: JSON.stringify(data) }).then(r => r.json());

export const fetchMyResume = () =>
  fetch(`${BASE_URL}/resumes/me`, { headers: headers() }).then(r => r.json());
