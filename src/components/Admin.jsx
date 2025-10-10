import { useState } from 'react';
import './Dashboard.css';

const AdminDashboard = ({ user, onSignOut }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const adminData = {
    name: user.firstName || 'Admin',
    email: user.email,
    totalStudents: 1249,
    activeStudents: 1180,
    pendingApplications: 45,
    wellnessAlerts: 12,
    resources: [
      { 
        id: 1, 
        title: 'Stress Management Guide', 
        category: 'Mental Health', 
        type: 'Article', 
        views: 245, 
        status: 'Published',
        author: 'Dr. Sarah Johnson',
        date: '2024-01-15',
        content: 'Comprehensive guide to managing stress in academic life...',
        likes: 89,
        comments: 12
      },
      { 
        id: 2, 
        title: 'Daily Exercise Routine', 
        category: 'Fitness', 
        type: 'Video', 
        views: 189, 
        status: 'Published',
        instructor: 'Fitness Coach Alex',
        duration: '15 min',
        likes: 67,
        comments: 8
      },
      { 
        id: 3, 
        title: 'Nutrition Basics', 
        category: 'Nutrition', 
        type: 'Article', 
        views: 156, 
        status: 'Draft',
        author: 'Dr. Emily Rodriguez',
        date: '2024-01-12',
        content: 'Essential nutrition tips for students...',
        likes: 34,
        comments: 5
      },
      { 
        id: 4, 
        title: 'Mindfulness Meditation', 
        category: 'Mental Health', 
        type: 'Video', 
        views: 320, 
        status: 'Published',
        instructor: 'Meditation Guide Mike',
        duration: '20 min',
        likes: 145,
        comments: 23
      },
      { 
        id: 5, 
        title: 'Sleep Optimization', 
        category: 'Sleep & Wellness', 
        type: 'Article', 
        views: 198, 
        status: 'Published',
        author: 'Dr. Michael Chen',
        date: '2024-01-10',
        content: 'How to improve sleep quality for better academic performance...',
        likes: 78,
        comments: 15
      }
    ],
    programs: [
      { id: 1, title: 'Mindfulness Workshop', date: '2024-01-25', attendees: 45, maxCapacity: 50 },
      { id: 2, title: 'Fitness Challenge', date: '2024-02-01', attendees: 78, maxCapacity: 100 },
      { id: 3, title: 'Nutrition Seminar', date: '2024-02-10', attendees: 32, maxCapacity: 40 }
    ],
    recentActivities: [
      { id: 1, action: 'New resource published', time: '2 hours ago', type: 'resource' },
      { id: 2, action: 'Wellness alert resolved', time: '4 hours ago', type: 'wellness' },
      { id: 3, action: 'Program scheduled', time: '6 hours ago', type: 'program' },
      { id: 4, action: 'Student registered', time: '1 day ago', type: 'registration' }
    ],
    analytics: {
      topResources: ['Stress Management', 'Exercise Guide', 'Sleep Tips'],
      userActivity: 89,
      programAttendance: 76
    }
  };

  const renderOverview = () => (
    <div className="dashboard-content">
      <div className="welcome-section">
        <h2>Admin Dashboard Overview 📊</h2>
        <p>Manage your student wellness hub effectively</p>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-info">
            <h3>Total Students</h3>
            <p className="stat-value">{adminData.totalStudents}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-info">
            <h3>Active Students</h3>
            <p className="stat-value">{adminData.activeStudents}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📋</div>
          <div className="stat-info">
            <h3>Pending Applications</h3>
            <p className="stat-value">{adminData.pendingApplications}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">⚠️</div>
          <div className="stat-info">
            <h3>Wellness Alerts</h3>
            <p className="stat-value">{adminData.wellnessAlerts}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderResources = () => (
    <div className="dashboard-content">
      <div className="section-header">
        <h2>Content Management</h2>
        <div className="admin-actions">
          <button className="primary-btn">+ Add Article</button>
          <button className="primary-btn">+ Add Video</button>
        </div>
      </div>
      
      <div className="content-stats">
        <div className="stat-item">
          <h3>Total Content</h3>
          <p>{adminData.resources.length}</p>
        </div>
        <div className="stat-item">
          <h3>Published</h3>
          <p>{adminData.resources.filter(r => r.status === 'Published').length}</p>
        </div>
        <div className="stat-item">
          <h3>Drafts</h3>
          <p>{adminData.resources.filter(r => r.status === 'Draft').length}</p>
        </div>
        <div className="stat-item">
          <h3>Total Views</h3>
          <p>{adminData.resources.reduce((sum, r) => sum + r.views, 0)}</p>
        </div>
      </div>

      <div className="filter-controls">
        <select className="filter-select">
          <option value="">All Status</option>
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
        </select>
        <select className="filter-select">
          <option value="">All Categories</option>
          <option value="Mental Health">Mental Health</option>
          <option value="Fitness">Fitness</option>
          <option value="Nutrition">Nutrition</option>
          <option value="Sleep & Wellness">Sleep & Wellness</option>
        </select>
        <div className="search-bar">
          <input type="text" placeholder="Search content..." />
          <button className="search-btn">🔍</button>
        </div>
      </div>

      <div className="resources-list">
        {adminData.resources.map(resource => (
          <div key={resource.id} className="resource-card">
            <div className="resource-header">
              <div className="resource-title-section">
                <h3>{resource.title}</h3>
                <div className="resource-meta">
                  <span className="resource-type">{resource.type}</span>
                  <span className={`status-badge ${resource.status.toLowerCase()}`}>
                    {resource.status}
                  </span>
                </div>
              </div>
              <div className="resource-stats">
                <span className="stat">👀 {resource.views}</span>
                <span className="stat">❤️ {resource.likes}</span>
                <span className="stat">💬 {resource.comments}</span>
              </div>
            </div>
            
            <div className="resource-details">
              <p className="resource-category">📂 {resource.category}</p>
              {resource.author && <p className="resource-author">👤 {resource.author}</p>}
              {resource.instructor && <p className="resource-instructor">👨‍🏫 {resource.instructor}</p>}
              {resource.duration && <p className="resource-duration">⏱️ {resource.duration}</p>}
              <p className="resource-date">📅 {resource.date}</p>
            </div>
            
            <div className="resource-content-preview">
              <p>{resource.content}</p>
            </div>
            
            <div className="resource-actions">
              <button className="action-btn primary">Edit</button>
              <button className="action-btn">View</button>
              <button className="action-btn">Analytics</button>
              <button className="action-btn secondary">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPrograms = () => (
    <div className="dashboard-content">
      <div className="section-header">
        <h2>Program Scheduler</h2>
        <button className="primary-btn">Schedule New Program</button>
      </div>
      <div className="programs-list">
        {adminData.programs.map(program => (
          <div key={program.id} className="program-card">
            <div className="program-header">
              <h3>{program.title}</h3>
              <span className="program-date">📅 {program.date}</span>
            </div>
            <div className="program-stats">
              <div className="attendance-info">
                <span>Attendees: {program.attendees}/{program.maxCapacity}</span>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${(program.attendees / program.maxCapacity) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="program-actions">
              <button className="action-btn">Edit</button>
              <button className="action-btn secondary">Cancel</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderActivities = () => (
    <div className="dashboard-content">
      <h2>Recent Activities</h2>
      <div className="activities-list">
        {adminData.recentActivities.map(activity => (
          <div key={activity.id} className="activity-card">
            <div className="activity-icon">
              {activity.type === 'registration' && '📝'}
              {activity.type === 'wellness' && '🧘'}
              {activity.type === 'academic' && '📚'}
            </div>
            <div className="activity-content">
              <h4>{activity.action}</h4>
              <p className="activity-time">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <div className="sidebar-header">
          <h2>Admin Portal</h2>
          <p>System Administrator</p>
        </div>
        
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            📊 Overview
          </button>
          <button 
            className={`nav-item ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            📚 Resources
          </button>
          <button 
            className={`nav-item ${activeTab === 'programs' ? 'active' : ''}`}
            onClick={() => setActiveTab('programs')}
          >
            📅 Programs
          </button>
          <button 
            className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            📈 Analytics
          </button>
        </nav>
        
        <div className="sidebar-footer">
          <button className="signout-btn" onClick={onSignOut}>
            🚪 Sign Out
          </button>
        </div>
      </div>
      
      <div className="dashboard-main">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <div className="user-info">
            <span>Welcome, {adminData.name}</span>
          </div>
        </div>
        
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'resources' && renderResources()}
        {activeTab === 'programs' && renderPrograms()}
        {activeTab === 'analytics' && renderActivities()}
      </div>
    </div>
  );
};

export default AdminDashboard;
