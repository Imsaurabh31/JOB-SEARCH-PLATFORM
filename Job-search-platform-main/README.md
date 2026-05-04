# Job Finder

A modern React.js application with smart UI design, role-based dashboards, and real-time job interaction capabilities.

## Core Features

- 🎯 **Smart & Minimal UI** – Clean, distraction-free design focused only on essential actions
- ⚡ **Real-Time Interaction** – Instant job posting and application without long form-filling
- 👥 **Role-Based Dashboard** – Separate views for Admin, Recruiter, and Job Seeker
- 📧 **Email Verification System** – Secure login with email OTP or verification link
- 🤖 **Customized Recommendations** – Suggests jobs based on user interests and skills
- 🚀 **Future-Ready Features** – Can easily integrate AI-based matching and chat system

## Technologies Used

- React.js 18 with Hooks
- HTML5 & CSS3 with advanced animations
- Axios for API calls
- Email verification system
- Role-based authentication
- Modern CSS animations and transitions
- Responsive grid layout
- Real-time state management

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## API Integration

The app is configured to work with the Adzuna API. To use real job data:

1. Sign up for a free account at [Adzuna Developer](https://developer.adzuna.com/)
2. Get your `app_id` and `app_key`
3. Replace the placeholder values in `src/components/SearchForm.js`:
   ```javascript
   app_id: 'your_actual_app_id',
   app_key: 'your_actual_app_key'
   ```

## Project Structure

```
src/
├── components/
│   ├── SearchForm.js      # Search form component
│   ├── SearchForm.css     # Search form styles
│   ├── JobList.js         # Job list container
│   ├── JobList.css        # Job list styles
│   ├── JobCard.js         # Individual job card
│   ├── JobCard.css        # Job card styles
│   ├── Login.js           # Authentication component
│   ├── Dashboard.js       # Role-based dashboard
│   ├── EmailVerification.js # Email OTP system
│   └── Recommendations.js # AI-ready recommendation engine
├── utils/
│   ├── auth.js           # Authentication utilities
│   └── recommendations.js # Recommendation algorithms
├── App.js                # Main app component
├── App.css              # App-level styles
├── index.js             # Entry point
└── index.css            # Global styles
```

## Features Implemented

### Core Functionality
✅ Smart & minimal UI design  
✅ Real-time job interaction  
✅ Role-based dashboard system  
✅ Email verification with OTP  
✅ Customized job recommendations  
✅ Future-ready AI integration structure  

### Technical Features
✅ Clean, modular, and commented code  
✅ Interactive styling with hover effects  
✅ Responsive design for all devices  
✅ Loading states and error handling  
✅ Modern gradient backgrounds  
✅ Smooth animations and transitions  
✅ API integration structure  
✅ Secure authentication system  

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner

## License

This project is open source and available under the MIT License.