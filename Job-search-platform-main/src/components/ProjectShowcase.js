import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectShowcase.css';

/* ── inline HTML mockups ── */
const HomepageMockup = () => (
  <div style={{ background: '#f1f5f9', fontFamily: 'Inter, sans-serif', fontSize: '12px' }}>
    {/* Header */}
    <div style={{ background: '#fff', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ background: '#6366f1', color: 'white', padding: '4px 12px', borderRadius: '6px', fontWeight: 700 }}>JobFinder Pro</div>
        {['Jobs','Companies','Services','Resume','Skills','Salary'].map(n => <span key={n} style={{ color: '#475569', fontWeight: 500 }}>{n}</span>)}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ background: '#f1f5f9', padding: '4px 12px', borderRadius: '20px', color: '#64748b' }}>🔍 Search...</div>
        <div style={{ background: '#6366f1', color: 'white', padding: '4px 12px', borderRadius: '20px', fontWeight: 600 }}>K</div>
      </div>
    </div>
    {/* Stats Bar */}
    <div style={{ background: '#6366f1', padding: '8px', display: 'flex', justifyContent: 'space-around' }}>
      {['3.2M+ Jobs','50K+ Companies','40M+ Seekers','1M+ Resumes'].map(s => <span key={s} style={{ color: 'white', fontWeight: 700 }}>{s}</span>)}
    </div>
    {/* Search Section */}
    <div style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)', padding: '20px', display: 'flex', gap: '8px', alignItems: 'center' }}>
      <input readOnly placeholder='🔍 Java Developer, React, Python...' style={{ flex: 2, padding: '8px 12px', borderRadius: '8px', border: 'none', fontSize: '12px' }} />
      <input readOnly placeholder='📍 City or Remote...' style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: 'none', fontSize: '12px' }} />
      <button style={{ background: '#f59e0b', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>🔍 Search Jobs</button>
    </div>
    {/* 3 Column Layout */}
    <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 200px', gap: '10px', padding: '10px' }}>
      {/* Left Sidebar */}
      <div style={{ background: 'white', borderRadius: '10px', padding: '12px', border: '1px solid #e2e8f0' }}>
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <div style={{ width: '40px', height: '40px', background: '#6366f1', borderRadius: '50%', margin: '0 auto 6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '16px' }}>K</div>
          <div style={{ fontWeight: 700, color: '#1e293b' }}>Khushi Jha</div>
          <div style={{ color: '#64748b', fontSize: '11px' }}>Job Seeker</div>
          <div style={{ background: '#e2e8f0', borderRadius: '4px', height: '6px', margin: '6px 0' }}>
            <div style={{ background: '#6366f1', width: '75%', height: '100%', borderRadius: '4px' }}></div>
          </div>
          <div style={{ fontSize: '10px', color: '#64748b' }}>Profile 75% complete</div>
        </div>
        <div style={{ fontWeight: 700, color: '#1e293b', marginBottom: '6px' }}>Quick Access</div>
        {[['🎯','My Applications','12'],['💼','Saved Jobs','8'],['🔔','Job Alerts','3'],['📊','Profile Views','45']].map(([icon,label,count]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '5px', borderRadius: '6px', background: '#f8fafc', marginBottom: '4px' }}>
            <span>{icon}</span><span style={{ flex: 1, color: '#475569' }}>{label}</span><span style={{ background: '#eef2ff', color: '#6366f1', padding: '1px 6px', borderRadius: '10px', fontWeight: 700 }}>{count}</span>
          </div>
        ))}
        <div style={{ fontWeight: 700, color: '#1e293b', margin: '8px 0 6px' }}>Job Categories</div>
        {[['Technology','1250'],['Marketing','890'],['Finance','670'],['Healthcare','540'],['Education','320']].map(([cat,count]) => (
          <div key={cat} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #f1f5f9', color: '#475569' }}>
            <span>{cat}</span><span style={{ color: '#6366f1', fontWeight: 600 }}>{count}</span>
          </div>
        ))}
      </div>
      {/* Main Content */}
      <div style={{ background: 'white', borderRadius: '10px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', padding: '10px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ background: 'white', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontWeight: 700, color: '#1e293b', marginBottom: '4px' }}>📄 Resume Builder</div>
            <div style={{ color: '#64748b', fontSize: '11px', marginBottom: '6px' }}>Resume Score: 65%</div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button style={{ flex: 1, background: '#6366f1', color: 'white', border: 'none', padding: '4px', borderRadius: '6px', fontSize: '10px', cursor: 'pointer' }}>Improve</button>
              <button style={{ flex: 1, background: '#f1f5f9', border: '1px solid #e2e8f0', padding: '4px', borderRadius: '6px', fontSize: '10px', cursor: 'pointer' }}>Download</button>
            </div>
          </div>
          <div style={{ background: 'white', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontWeight: 700, color: '#1e293b', marginBottom: '4px' }}>🎯 Skill Assessment</div>
            {[['JavaScript','85%','#10b981'],['React','78%','#6366f1'],['Node.js','65%','#f59e0b']].map(([s,p,c]) => (
              <div key={s} style={{ marginBottom: '3px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}><span>{s}</span><span style={{ color: c, fontWeight: 700 }}>{p}</span></div>
                <div style={{ background: '#e2e8f0', height: '4px', borderRadius: '2px' }}><div style={{ background: c, width: p, height: '100%', borderRadius: '2px' }}></div></div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: '10px' }}>
          <div style={{ fontWeight: 700, color: '#1e293b', marginBottom: '8px' }}>Found 4 jobs</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[['React Developer','TechCorp Solutions','Remote','$65K-$95K','Full-time'],
              ['Full Stack Developer','Innovation Labs','San Francisco','$75K-$115K','Hybrid'],
              ['Frontend Engineer','Digital Solutions','New York','$70K-$110K','Remote'],
              ['Data Analytics Specialist','DataInsights Corp','Chicago','$80K-$120K','Full-time']
            ].map(([title,company,loc,sal,type]) => (
              <div key={title} style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '10px', padding: '10px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,#6366f1,#a855f7)' }}></div>
                <div style={{ fontWeight: 700, color: '#6366f1', marginBottom: '3px' }}>{title}</div>
                <div style={{ color: '#475569', fontSize: '11px' }}>🏢 {company}</div>
                <div style={{ color: '#475569', fontSize: '11px' }}>📍 {loc}</div>
                <div style={{ display: 'flex', gap: '4px', margin: '5px 0' }}>
                  <span style={{ background: '#eef2ff', color: '#6366f1', padding: '1px 6px', borderRadius: '10px', fontSize: '10px', fontWeight: 600 }}>{type}</span>
                </div>
                <div style={{ color: '#059669', fontWeight: 700, fontSize: '11px', marginBottom: '6px' }}>💰 {sal}</div>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <button style={{ flex: 1, background: '#10b981', color: 'white', border: 'none', padding: '3px', borderRadius: '5px', fontSize: '10px', cursor: 'pointer' }}>⚡ Apply</button>
                  <button style={{ flex: 1, background: '#6366f1', color: 'white', border: 'none', padding: '3px', borderRadius: '5px', fontSize: '10px', cursor: 'pointer' }}>View</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right Sidebar */}
      <div style={{ background: 'white', borderRadius: '10px', padding: '12px', border: '1px solid #e2e8f0' }}>
        <div style={{ fontWeight: 700, color: '#1e293b', marginBottom: '8px' }}>📈 Market Stats</div>
        {[['Jobs Today','2,847','+12%'],['Companies','1,250','+8%'],['New Users','456','+15%']].map(([l,v,t]) => (
          <div key={l} style={{ background: '#f8fafc', padding: '6px', borderRadius: '6px', marginBottom: '5px' }}>
            <div style={{ fontWeight: 700, color: '#1e293b' }}>{v} <span style={{ color: '#10b981', fontSize: '10px' }}>{t}</span></div>
            <div style={{ color: '#64748b', fontSize: '10px' }}>{l}</div>
          </div>
        ))}
        <div style={{ fontWeight: 700, color: '#1e293b', margin: '8px 0 6px' }}>🔥 Trending Jobs</div>
        {[['React Developer','TechCorp','₹8-12L','Remote'],['Data Scientist','DataFlow','₹15-20L','Hybrid'],['UI/UX Designer','DesignHub','₹6-10L','Onsite']].map(([t,c,s,type]) => (
          <div key={t} style={{ padding: '6px', borderRadius: '6px', background: '#f8fafc', marginBottom: '4px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontWeight: 600, color: '#1e293b', fontSize: '11px' }}>{t}</div>
            <div style={{ color: '#64748b', fontSize: '10px' }}>{c} • {s}</div>
            <span style={{ background: '#eef2ff', color: '#6366f1', padding: '1px 6px', borderRadius: '10px', fontSize: '10px' }}>{type}</span>
          </div>
        ))}
        <div style={{ fontWeight: 700, color: '#1e293b', margin: '8px 0 6px' }}>🏢 Top Companies</div>
        {[['🔍','Google','45 jobs','4.8'],['🪟','Microsoft','32 jobs','4.7'],['📦','Amazon','28 jobs','4.6'],['🍎','Apple','15 jobs','4.9']].map(([logo,name,jobs,rating]) => (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 0', borderBottom: '1px solid #f1f5f9' }}>
            <span style={{ fontSize: '16px' }}>{logo}</span>
            <div><div style={{ fontWeight: 600, color: '#1e293b', fontSize: '11px' }}>{name}</div><div style={{ color: '#64748b', fontSize: '10px' }}>{jobs} • ⭐ {rating}</div></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ApplicationMockup = () => (
  <div style={{ background: '#f1f5f9', fontFamily: 'Inter, sans-serif', fontSize: '12px', padding: '12px' }}>
    {/* Header */}
    <div style={{ background: '#fff', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '8px', marginBottom: '10px', border: '1px solid #e2e8f0' }}>
      <div style={{ background: '#6366f1', color: 'white', padding: '4px 12px', borderRadius: '6px', fontWeight: 700 }}>JobFinder Pro</div>
      <div style={{ display: 'flex', gap: '12px', color: '#475569' }}>
        {['Jobs','Companies','Resume','Skills'].map(n => <span key={n}>{n}</span>)}
      </div>
    </div>
    {/* Back Button */}
    <button style={{ background: '#eef2ff', color: '#6366f1', border: '1px solid #c7d2fe', padding: '5px 14px', borderRadius: '8px', fontWeight: 600, marginBottom: '10px', cursor: 'pointer' }}>← Back to Jobs</button>
    {/* Two Column Layout */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '12px' }}>
      {/* Left - Job Details */}
      <div style={{ background: 'white', borderRadius: '12px', padding: '16px', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg,#6366f1,#a855f7)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '18px' }}>T</div>
          <div>
            <div style={{ fontWeight: 700, color: '#1e293b', fontSize: '14px' }}>React Developer</div>
            <div style={{ color: '#6366f1', fontWeight: 600 }}>TechCorp Solutions</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
          {[['📍 Remote','#eff6ff','#2563eb'],['💼 Full-time','#eef2ff','#6366f1'],['🎯 Mid Level','#f0fdf4','#16a34a'],['💰 $65K-$95K','#fefce8','#ca8a04']].map(([t,bg,c]) => (
            <span key={t} style={{ background: bg, color: c, padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, border: `1px solid ${c}30` }}>{t}</span>
          ))}
        </div>
        <div style={{ fontWeight: 700, color: '#1e293b', marginBottom: '6px' }}>Job Description</div>
        <div style={{ color: '#475569', fontSize: '11px', lineHeight: 1.6, marginBottom: '12px' }}>Join our team as a React developer and work on exciting projects with modern technologies. You will collaborate with cross-functional teams to deliver high-quality solutions.</div>
        <div style={{ fontWeight: 700, color: '#1e293b', marginBottom: '6px' }}>Requirements</div>
        {['Strong React.js knowledge','Node.js & REST APIs','MongoDB experience','Good communication skills'].map(r => (
          <div key={r} style={{ color: '#475569', fontSize: '11px', padding: '3px 0', borderBottom: '1px solid #f1f5f9' }}>• {r}</div>
        ))}
        <div style={{ fontWeight: 700, color: '#1e293b', margin: '10px 0 6px' }}>Benefits</div>
        {['💰 $65K - $95K / year','🏥 Health insurance','🏖️ Paid time off','📈 Career growth'].map(b => (
          <div key={b} style={{ color: '#475569', fontSize: '11px', padding: '3px 0' }}>{b}</div>
        ))}
      </div>
      {/* Right - Application Form */}
      <div style={{ background: 'white', borderRadius: '12px', padding: '16px', border: '1px solid #e2e8f0' }}>
        <div style={{ fontWeight: 700, color: '#1e293b', fontSize: '14px', marginBottom: '14px', textAlign: 'center' }}>Apply for this Position</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '8px' }}>
          {['Full Name *','Mobile Number *'].map(label => (
            <div key={label}>
              <div style={{ fontSize: '10px', fontWeight: 600, color: '#374151', marginBottom: '3px' }}>{label}</div>
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '6px 10px', color: '#94a3b8', fontSize: '11px' }}>{label === 'Full Name *' ? 'Enter your name' : '+91 9876543210'}</div>
            </div>
          ))}
        </div>
        <div style={{ marginBottom: '8px' }}>
          <div style={{ fontSize: '10px', fontWeight: 600, color: '#374151', marginBottom: '3px' }}>Email Address *</div>
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '6px 10px', color: '#94a3b8', fontSize: '11px' }}>your@email.com</div>
        </div>
        <div style={{ marginBottom: '8px' }}>
          <div style={{ fontSize: '10px', fontWeight: 600, color: '#374151', marginBottom: '3px' }}>Address *</div>
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '6px 10px', color: '#94a3b8', fontSize: '11px', height: '48px' }}>Enter your full address...</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px' }}>
          {[['Upload CV/Resume *','📎 Choose PDF/DOC file'],['Passport Size Photo *','📷 Choose JPG/PNG file']].map(([label, placeholder]) => (
            <div key={label}>
              <div style={{ fontSize: '10px', fontWeight: 600, color: '#374151', marginBottom: '3px' }}>{label}</div>
              <div style={{ background: '#f8fafc', border: '1.5px dashed #c7d2fe', borderRadius: '6px', padding: '10px', textAlign: 'center', color: '#6366f1', fontSize: '10px' }}>{placeholder}</div>
            </div>
          ))}
        </div>
        <button style={{ width: '100%', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', border: 'none', padding: '10px', borderRadius: '10px', fontWeight: 700, fontSize: '13px', cursor: 'pointer' }}>Submit Application</button>
        <div style={{ textAlign: 'center', color: '#64748b', fontSize: '10px', marginTop: '8px' }}>🔒 Your data is secure and encrypted</div>
      </div>
    </div>
  </div>
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
          {[
            ['25+','React Components'],
            ['10+','Pages & Routes'],
            ['100%','Mobile Responsive'],
            ['5000+','Lines of Code'],
            ['8+','Skill Tests'],
            ['3','User Roles'],
            ['6','Resume Templates'],
            ['8','Courses Available']
          ].map(([val, label], i) => (
            <div key={i} className="stat-item">
              <h3>{val}</h3>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM / FOOTER NOTE */}
      <section className="showcase-footer-note">
        <p>🚀 Built with React.js 18 + Node.js + MongoDB &nbsp;|&nbsp; Role-based Auth &nbsp;|&nbsp; REST API &nbsp;|&nbsp; Fully Responsive</p>
      </section>

    </div>
  );
};

export default ProjectShowcase;
