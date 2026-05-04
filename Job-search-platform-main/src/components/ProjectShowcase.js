import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectShowcase.css';

/* ── inline SVG mockups ── */
const HomepageMockup = () => (
  <svg viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg" className="mockup-svg">
    {/* browser chrome */}
    <rect width="900" height="520" rx="12" fill="#f1f5f9"/>
    <rect width="900" height="40" rx="12" fill="#1e293b"/>
    <rect y="28" width="900" height="12" fill="#1e293b"/>
    <circle cx="20" cy="20" r="6" fill="#ef4444"/>
    <circle cx="38" cy="20" r="6" fill="#f59e0b"/>
    <circle cx="56" cy="20" r="6" fill="#10b981"/>
    <rect x="80" y="10" width="640" height="20" rx="10" fill="#334155"/>
    {/* header */}
    <rect x="0" y="40" width="900" height="50" fill="#fff" />
    <rect x="16" y="52" width="90" height="26" rx="6" fill="#6366f1"/>
    <text x="61" y="70" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">JobFinder</text>
    <rect x="130" y="58" width="50" height="14" rx="4" fill="#eef2ff"/>
    <rect x="192" y="58" width="60" height="14" rx="4" fill="#eef2ff"/>
    <rect x="264" y="58" width="50" height="14" rx="4" fill="#eef2ff"/>
    <rect x="326" y="58" width="55" height="14" rx="4" fill="#eef2ff"/>
    <rect x="650" y="54" width="140" height="22" rx="11" fill="#f1f5f9"/>
    <rect x="810" y="54" width="70" height="22" rx="11" fill="#6366f1"/>
    {/* hero search */}
    <rect x="0" y="90" width="900" height="100" fill="url(#heroGrad)"/>
    <defs>
      <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#6366f1"/>
        <stop offset="100%" stopColor="#a855f7"/>
      </linearGradient>
    </defs>
    <rect x="60" y="108" width="480" height="32" rx="8" fill="rgba(255,255,255,0.9)"/>
    <rect x="556" y="108" width="160" height="32" rx="8" fill="rgba(255,255,255,0.9)"/>
    <rect x="732" y="108" width="110" height="32" rx="8" fill="#f59e0b"/>
    <text x="787" y="129" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Search Jobs</text>
    <text x="300" y="129" fill="#94a3b8" fontSize="11">🔍  Java Developer, React, Python...</text>
    {/* stats bar */}
    <rect x="0" y="190" width="900" height="44" fill="#6366f1"/>
    {['3.2M+ Jobs','50K+ Companies','40M+ Seekers','1M+ Resumes'].map((t,i)=>(
      <text key={i} x={112+i*220} y="217" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">{t}</text>
    ))}
    {/* 3-col layout */}
    {/* left sidebar */}
    <rect x="10" y="244" width="180" height="266" rx="10" fill="white"/>
    <circle cx="100" cy="278" r="24" fill="#6366f1"/>
    <text x="100" y="283" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">K</text>
    <rect x="30" y="312" width="140" height="8" rx="4" fill="#e2e8f0"/>
    <rect x="50" y="326" width="100" height="6" rx="3" fill="#e2e8f0"/>
    {[0,1,2,3].map(i=><rect key={i} x="20" y={348+i*28} width="160" height="18" rx="6" fill="#f1f5f9"/>)}
    {/* main content */}
    <rect x="200" y="244" width="500" height="266" rx="10" fill="white"/>
    {[0,1,2,3].map(i=>(
      <g key={i}>
        <rect x="216" y={254+i*62} width="230" height="52" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
        <rect x="226" y={262+i*62} width="120" height="10" rx="3" fill="#6366f1"/>
        <rect x="226" y={278+i*62} width="80" height="7" rx="3" fill="#e2e8f0"/>
        <rect x="226" y={291+i*62} width="60" height="7" rx="3" fill="#e2e8f0"/>
        <rect x="456" y={254+i*62} width="230" height="52" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
        <rect x="466" y={262+i*62} width="120" height="10" rx="3" fill="#8b5cf6"/>
        <rect x="466" y={278+i*62} width="80" height="7" rx="3" fill="#e2e8f0"/>
        <rect x="466" y={291+i*62} width="60" height="7" rx="3" fill="#e2e8f0"/>
      </g>
    ))}
    {/* right sidebar */}
    <rect x="710" y="244" width="180" height="266" rx="10" fill="white"/>
    {[0,1,2].map(i=><rect key={i} x="720" y={254+i*56} width="160" height="46" rx="8" fill="#f1f5f9"/>)}
    <rect x="720" y="424" width="160" height="76" rx="8" fill="url(#heroGrad)"/>
  </svg>
);

const ApplicationMockup = () => (
  <svg viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg" className="mockup-svg">
    <rect width="900" height="520" rx="12" fill="#f1f5f9"/>
    <rect width="900" height="40" rx="12" fill="#1e293b"/>
    <rect y="28" width="900" height="12" fill="#1e293b"/>
    <circle cx="20" cy="20" r="6" fill="#ef4444"/>
    <circle cx="38" cy="20" r="6" fill="#f59e0b"/>
    <circle cx="56" cy="20" r="6" fill="#10b981"/>
    <rect x="80" y="10" width="640" height="20" rx="10" fill="#334155"/>
    {/* header */}
    <rect x="0" y="40" width="900" height="44" fill="#fff"/>
    <rect x="16" y="50" width="80" height="24" rx="6" fill="#6366f1"/>
    <text x="56" y="67" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">JobFinder</text>
    {/* back btn */}
    <rect x="20" y="100" width="100" height="28" rx="8" fill="#eef2ff" stroke="#c7d2fe" strokeWidth="1"/>
    <text x="70" y="119" textAnchor="middle" fill="#6366f1" fontSize="11" fontWeight="600">← Back</text>
    {/* two column layout */}
    {/* left - job details */}
    <rect x="20" y="140" width="340" height="360" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
    <rect x="36" y="158" width="200" height="16" rx="4" fill="#1e293b"/>
    <rect x="36" y="182" width="140" height="10" rx="3" fill="#6366f1"/>
    <rect x="36" y="200" width="120" height="10" rx="3" fill="#e2e8f0"/>
    <rect x="36" y="218" width="160" height="10" rx="3" fill="#e2e8f0"/>
    <rect x="36" y="240" width="300" height="6" rx="3" fill="#f1f5f9"/>
    <rect x="36" y="254" width="280" height="6" rx="3" fill="#f1f5f9"/>
    <rect x="36" y="268" width="260" height="6" rx="3" fill="#f1f5f9"/>
    <rect x="36" y="282" width="290" height="6" rx="3" fill="#f1f5f9"/>
    <rect x="36" y="296" width="240" height="6" rx="3" fill="#f1f5f9"/>
    <rect x="36" y="320" width="100" height="24" rx="12" fill="#dcfce7"/>
    <text x="86" y="337" textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="700">$65K - $95K</text>
    {/* right - form */}
    <rect x="380" y="140" width="500" height="360" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
    <text x="630" y="170" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="700">Apply for this Position</text>
    {/* form fields */}
    {[['Full Name *','396',200],['Mobile Number *','620',200],['Email Address *','396',248],['Address *','396',296]].map(([label,x,y],i)=>(
      <g key={i}>
        <text x={Number(x)} y={Number(y)} fill="#374151" fontSize="9" fontWeight="600">{label}</text>
        <rect x={Number(x)} y={Number(y)+6} width={label==='Email Address *'||label==='Address *'?484:220} height={label==='Address *'?50:24} rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
      </g>
    ))}
    {/* file uploads */}
    <text x="396" y="370" fill="#374151" fontSize="9" fontWeight="600">Upload CV/Resume *</text>
    <rect x="396" y="378" width="220" height="36" rx="6" fill="#f8fafc" stroke="#c7d2fe" strokeWidth="1" strokeDasharray="4"/>
    <text x="506" y="401" textAnchor="middle" fill="#6366f1" fontSize="9">📎 Choose file</text>
    <text x="640" y="370" fill="#374151" fontSize="9" fontWeight="600">Passport Photo *</text>
    <rect x="640" y="378" width="220" height="36" rx="6" fill="#f8fafc" stroke="#c7d2fe" strokeWidth="1" strokeDasharray="4"/>
    <text x="750" y="401" textAnchor="middle" fill="#6366f1" fontSize="9">📷 Choose file</text>
    {/* submit */}
    <rect x="396" y="430" width="464" height="36" rx="10" fill="url(#appGrad)"/>
    <defs>
      <linearGradient id="appGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#6366f1"/>
        <stop offset="100%" stopColor="#8b5cf6"/>
      </linearGradient>
    </defs>
    <text x="628" y="453" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">Submit Application</text>
  </svg>
);

const DashboardMockup = () => (
  <svg viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg" className="mockup-svg">
    <rect width="900" height="520" rx="12" fill="#f1f5f9"/>
    <rect width="900" height="40" rx="12" fill="#1e293b"/>
    <rect y="28" width="900" height="12" fill="#1e293b"/>
    <circle cx="20" cy="20" r="6" fill="#ef4444"/>
    <circle cx="38" cy="20" r="6" fill="#f59e0b"/>
    <circle cx="56" cy="20" r="6" fill="#10b981"/>
    <rect x="80" y="10" width="640" height="20" rx="10" fill="#334155"/>
    {/* sidebar */}
    <rect x="0" y="40" width="200" height="480" fill="#1e293b"/>
    <rect x="16" y="56" width="120" height="28" rx="8" fill="#6366f1"/>
    <text x="76" y="75" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">JobFinder</text>
    {['Overview','Applications','Saved Jobs','Profile','Settings','Logout'].map((item,i)=>(
      <g key={i}>
        <rect x="10" y={104+i*52} width="180" height="36" rx="8" fill={i===0?'#6366f1':'transparent'}/>
        <text x="100" y={127+i*52} textAnchor="middle" fill={i===0?'white':'#94a3b8'} fontSize="11" fontWeight={i===0?'600':'400'}>{item}</text>
      </g>
    ))}
    {/* main */}
    <rect x="200" y="40" width="700" height="480" fill="#f1f5f9"/>
    <text x="380" y="76" fill="#1e293b" fontSize="16" fontWeight="700">Job Seeker Dashboard</text>
    {/* stat cards */}
    {[['12','Applications Sent','#6366f1'],['45','Profile Views','#10b981'],['8','Saved Jobs','#f59e0b'],['3','Interviews','#ef4444']].map(([val,label,color],i)=>(
      <g key={i}>
        <rect x={216+i*166} y="90" width="150" height="80" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
        <text x={291+i*166} y="130" textAnchor="middle" fill={color} fontSize="28" fontWeight="800">{val}</text>
        <text x={291+i*166} y="152" textAnchor="middle" fill="#64748b" fontSize="9">{label}</text>
      </g>
    ))}
    {/* recommended jobs */}
    <text x="216" y="200" fill="#1e293b" fontSize="12" fontWeight="700">Recommended Jobs</text>
    {[['React Developer','TechCorp • Remote','$65K-95K','#6366f1'],
      ['Full Stack Engineer','Innovation Labs • SF','$85K-130K','#10b981'],
      ['Frontend Developer','Digital Co • NY','$70K-110K','#f59e0b'],
      ['Node.js Developer','CloudFirst • Remote','$75K-115K','#8b5cf6']].map(([title,sub,sal,color],i)=>(
      <g key={i}>
        <rect x="216" y={212+i*62} width="460" height="52" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
        <rect x="216" y={212+i*62} width="4" height="52" rx="2" fill={color}/>
        <text x="232" y={232+i*62} fill="#1e293b" fontSize="11" fontWeight="600">{title}</text>
        <text x="232" y={248+i*62} fill="#64748b" fontSize="9">{sub}</text>
        <rect x="560" y={222+i*62} width="100" height="22" rx="11" fill={color}/>
        <text x="610" y={237+i*62} textAnchor="middle" fill="white" fontSize="9" fontWeight="700">{sal}</text>
        <rect x="460" y={222+i*62} width="80" height="22" rx="6" fill="#eef2ff"/>
        <text x="500" y={237+i*62} textAnchor="middle" fill="#6366f1" fontSize="9" fontWeight="600">Apply Now</text>
      </g>
    ))}
    {/* activity */}
    <rect x="692" y="190" width="196" height="270" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
    <text x="790" y="212" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="700">Recent Activity</text>
    {['Application Viewed','Profile Updated','New Job Match','Alert Triggered'].map((act,i)=>(
      <g key={i}>
        <circle cx="712" cy={234+i*48} r="8" fill={['#6366f1','#10b981','#f59e0b','#ef4444'][i]}/>
        <text x="726" y={231+i*48} fill="#1e293b" fontSize="9" fontWeight="600">{act}</text>
        <text x="726" y={244+i*48} fill="#94a3b8" fontSize="8">{['2 min ago','1 hr ago','3 hrs ago','Today'][i]}</text>
      </g>
    ))}
  </svg>
);

const ProjectShowcase = () => {
  const navigate = useNavigate();
  const featureLinks = ['/jobs', '/skills', '/resume', '/test', '/services', '/jobs'];

  const features = [
    { icon: '🔍', title: 'Smart Job Search', description: 'Search any role — Java Developer, React, Python — with real-time results and 10 matching jobs instantly.' },
    { icon: '🎯', title: 'Skill Assessment', description: 'Comprehensive testing for technical and soft skills with instant scoring and badges.' },
    { icon: '📄', title: 'Resume Builder', description: 'Professional templates with live preview, save to profile, and one-click download.' },
    { icon: '🧭', title: 'Career Guidance', description: 'Personalized career recommendations and skill development paths.' },
    { icon: '📚', title: 'Course Integration', description: 'Skill enhancement courses with enrollment and progress tracking.' },
    { icon: '📱', title: 'Mobile Responsive', description: 'Optimized experience across all devices and screen sizes.' },
  ];

  const screenshots = [
    { title: 'Homepage', description: 'Three-column layout with job search, sidebar widgets, and real-time job cards.', component: <HomepageMockup />, link: '/' },
    { title: 'Job Application Form', description: 'Two-column form with job details on left and full application form on right with file uploads.', component: <ApplicationMockup />, link: '/apply' },
    { title: 'User Dashboard', description: 'Role-based dashboard with stats, recommended jobs, and recent activity feed.', component: <DashboardMockup />, link: '/dashboard' },
  ];

  const techs = [
    { icon: '⚛️', name: 'React.js 18', color: '#61dafb', bg: '#e8f9fd' },
    { icon: '🟨', name: 'JavaScript ES6+', color: '#f7df1e', bg: '#fefce8' },
    { icon: '🎨', name: 'CSS3', color: '#1572b6', bg: '#e8f0fe' },
    { icon: '🟢', name: 'Node.js', color: '#339933', bg: '#f0fdf4' },
    { icon: '🍃', name: 'MongoDB', color: '#47a248', bg: '#f0fdf4' },
    { icon: '🚀', name: 'Express.js', color: '#000000', bg: '#f8fafc' },
  ];

  return (
    <div className="project-showcase">

      {/* HEADER */}
      <div className="showcase-header">
        <div className="showcase-badge">🚀 Full Stack Project</div>
        <h1>JobFinder Pro</h1>
        <p>A complete React.js + Node.js + MongoDB job portal with real authentication, live job search, applications, resume builder and skill tests.</p>
        <div className="showcase-cta">
          <button className="cta-primary" onClick={() => navigate('/')}>🔍 Try Live Demo</button>
          <button className="cta-secondary" onClick={() => navigate('/skills')}>🎯 Take Skill Test</button>
        </div>
      </div>

      {/* SCREENSHOTS — each one full width, stacked separately */}
      <section className="screenshots-section">
        <div className="section-label">📸 Application Screenshots</div>
        <h2>See It In Action</h2>
        <p className="section-sub">Each screen is fully functional — click the button below each to open it live.</p>

        <div className="screenshots-stack">
          {screenshots.map((s, i) => (
            <div key={i} className="screenshot-block">
              <div className="screenshot-meta">
                <span className="screenshot-number">0{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
                <button className="screenshot-btn" onClick={() => navigate(s.link)}>
                  Open Page →
                </button>
              </div>
              <div className="screenshot-frame">
                <div className="frame-bar">
                  <span className="dot red"/>
                  <span className="dot yellow"/>
                  <span className="dot green"/>
                  <span className="frame-url">localhost:3000{s.link}</span>
                </div>
                <div className="frame-body">
                  {s.component}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <div className="section-label">✨ Features</div>
        <h2>Key Features</h2>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card" onClick={() => navigate(featureLinks[i])}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
              <span className="feature-link">Explore →</span>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="tech-stack-section">
        <div className="section-label">🛠️ Tech Stack</div>
        <h2>Technology Stack</h2>
        <div className="tech-grid">
          {techs.map((t, i) => (
            <div key={i} className="tech-item" style={{ background: t.bg }}>
              <span className="tech-icon">{t.icon}</span>
              <span className="tech-name" style={{ color: t.color === '#f7df1e' ? '#92400e' : t.color }}>{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="project-stats">
        <h2>Project Statistics</h2>
        <div className="stats-grid">
          {[['25+','React Components'],['10+','Pages & Routes'],['100%','Mobile Responsive'],['5000+','Lines of Code']].map(([val, label], i) => (
            <div key={i} className="stat-item">
              <h3>{val}</h3>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ProjectShowcase;
