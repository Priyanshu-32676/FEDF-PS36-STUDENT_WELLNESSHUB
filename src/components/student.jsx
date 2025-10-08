import { useState } from 'react';
import './Dashboard.css';

const StudentDashboard = ({ user, onSignOut }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const studentData = {
    name: user.firstName || 'Student',
    email: user.email,
    studentId: 'STU2024001',
    savedResources: [
      { id: 1, title: 'Stress Management Techniques', type: 'Article', category: 'Mental Health' },
      { id: 2, title: 'Daily Exercise Routine', type: 'Video', category: 'Fitness' },
      { id: 3, title: 'Healthy Meal Planning', type: 'Article', category: 'Nutrition' }
    ],
    wellnessContent: {
      articles: [
        {
          id: 1,
          title: '5-Minute Mindfulness Meditation for Students',
          category: 'Mental Health',
          readTime: '5 min',
          author: 'Dr. Sarah Johnson',
          date: '2024-01-15',
          content: 'Learn simple mindfulness techniques to reduce stress and improve focus during your studies...',
          image: '🧘‍♀️',
          likes: 245,
          views: 1200
        },
        {
          id: 2,
          title: 'Building Healthy Sleep Habits for Academic Success',
          category: 'Sleep & Wellness',
          readTime: '8 min',
          author: 'Dr. Michael Chen',
          date: '2024-01-12',
          content: 'Discover the science behind sleep and how proper rest can boost your academic performance...',
          image: '😴',
          likes: 189,
          views: 980
        },
        {
          id: 3,
          title: 'Nutrition Tips for Busy Students',
          category: 'Nutrition',
          readTime: '6 min',
          author: 'Dr. Emily Rodriguez',
          date: '2024-01-10',
          content: 'Simple and healthy meal ideas that fit into your busy student schedule...',
          image: '🥗',
          likes: 156,
          views: 750
        },
        {
          id: 4,
          title: 'Managing Exam Anxiety: A Complete Guide',
          category: 'Mental Health',
          readTime: '10 min',
          author: 'Dr. Sarah Johnson',
          date: '2024-01-08',
          content: 'Evidence-based strategies to overcome test anxiety and perform your best...',
          image: '📚',
          likes: 298,
          views: 1450
        },
        {
          id: 5,
          title: 'The Power of Gratitude in Student Life',
          category: 'Mental Health',
          readTime: '7 min',
          author: 'Dr. Lisa Wang',
          date: '2024-01-05',
          content: 'How practicing gratitude can improve your mental health and academic success...',
          image: '🙏',
          likes: 167,
          views: 890
        }
      ],
      videos: [
        {
          id: 1,
          title: 'Morning Yoga Flow for Students',
          category: 'Fitness',
          duration: '15 min',
          instructor: 'Yoga Master Alex',
          date: '2024-01-14',
          description: 'Start your day with this energizing yoga sequence designed for students...',
          thumbnail: '🧘‍♂️',
          views: 2100,
          likes: 189
        },
        {
          id: 2,
          title: 'Quick Desk Exercises for Study Breaks',
          category: 'Fitness',
          duration: '10 min',
          instructor: 'Fitness Coach Sarah',
          date: '2024-01-11',
          description: 'Simple exercises you can do at your desk to stay active during long study sessions...',
          thumbnail: '💪',
          views: 1650,
          likes: 145
        },
        {
          id: 3,
          title: 'Breathing Techniques for Stress Relief',
          category: 'Mental Health',
          duration: '12 min',
          instructor: 'Meditation Guide Mike',
          date: '2024-01-09',
          description: 'Learn powerful breathing exercises to calm your mind and reduce stress...',
          thumbnail: '🌬️',
          views: 1890,
          likes: 203
        },
        {
          id: 4,
          title: 'Healthy Meal Prep for Students',
          category: 'Nutrition',
          duration: '20 min',
          instructor: 'Nutritionist Emma',
          date: '2024-01-07',
          description: 'Step-by-step guide to meal prepping healthy, budget-friendly meals...',
          thumbnail: '🍱',
          views: 1200,
          likes: 98
        },
        {
          id: 5,
          title: 'Study Music: Focus and Concentration',
          category: 'Mental Health',
          duration: '60 min',
          instructor: 'Music Therapist John',
          date: '2024-01-04',
          description: 'Curated playlist of calming music to enhance your study sessions...',
          thumbnail: '🎵',
          views: 3200,
          likes: 267
        }
      ]
    },
    appointments: [
      { id: 1, counselor: 'Dr. Sarah Johnson', date: '2024-01-20', time: '2:00 PM', status: 'Scheduled' },
      { id: 2, counselor: 'Dr. Mike Chen', date: '2024-01-25', time: '10:00 AM', status: 'Pending' }
    ],
    goals: [
      { id: 1, title: 'Exercise 3 times per week', progress: 80, target: 100 },
      { id: 2, title: 'Meditate daily', progress: 60, target: 100 },
      { id: 3, title: 'Sleep 8 hours nightly', progress: 70, target: 100 }
    ],
    wellness: {
      mentalHealth: 85,
      physicalHealth: 90,
      socialWellness: 80
    }
  };

  const renderOverview = () => (
    <div className="dashboard-content">
      <div className="welcome-section">
        <h2>Welcome back, {studentData.name}! 👋</h2>
        <p>Your personalized wellness hub for health and academic success</p>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🧠</div>
          <div className="stat-info">
            <h3>Mental Health</h3>
            <p className="stat-value">{studentData.wellness.mentalHealth}%</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">💪</div>
          <div className="stat-info">
            <h3>Physical Health</h3>
            <p className="stat-value">{studentData.wellness.physicalHealth}%</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🤝</div>
          <div className="stat-info">
            <h3>Social Wellness</h3>
            <p className="stat-value">{studentData.wellness.socialWellness}%</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-info">
            <h3>Upcoming Appointments</h3>
            <p className="stat-value">{studentData.appointments.length}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAppointments = () => (
    <div className="dashboard-content">
      <div className="section-header">
        <h2>My Appointments</h2>
        <button className="primary-btn">Book New Appointment</button>
      </div>
      <div className="appointments-list">
        {studentData.appointments.map(appointment => (
          <div key={appointment.id} className="appointment-card">
            <div className="appointment-header">
              <h3>{appointment.counselor}</h3>
              <span className={`status-badge ${appointment.status.toLowerCase()}`}>
                {appointment.status}
              </span>
            </div>
            <p className="appointment-details">
              📅 {appointment.date} at {appointment.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGoals = () => (
    <div className="dashboard-content">
      <div className="section-header">
        <h2>My Wellness Goals</h2>
        <button className="primary-btn">Add New Goal</button>
      </div>
      <div className="goals-list">
        {studentData.goals.map(goal => (
          <div key={goal.id} className="goal-card">
            <div className="goal-header">
              <h3>{goal.title}</h3>
              <span className="goal-progress">{goal.progress}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${goal.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderArticles = () => (
    <div className="dashboard-content">
      <div className="section-header">
        <h2>Wellness Articles</h2>
        <div className="filter-bar">
          <select className="filter-select">
            <option value="">All Categories</option>
            <option value="Mental Health">Mental Health</option>
            <option value="Nutrition">Nutrition</option>
            <option value="Sleep & Wellness">Sleep & Wellness</option>
          </select>
          <div className="search-bar">
            <input type="text" placeholder="Search articles..." />
            <button className="search-btn">🔍</button>
          </div>
        </div>
      </div>
      <div className="articles-grid">
        {studentData.wellnessContent.articles.map(article => (
          <div key={article.id} className="article-card">
            <div className="article-image">
              <span className="article-emoji">{article.image}</span>
            </div>
            <div className="article-content">
              <div className="article-meta">
                <span className="article-category">{article.category}</span>
                <span className="article-read-time">{article.readTime}</span>
              </div>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-author">By {article.author}</p>
              <p className="article-preview">{article.content}</p>
              <div className="article-stats">
                <span className="article-likes">❤️ {article.likes}</span>
                <span className="article-views">👁️ {article.views}</span>
                <span className="article-date">{article.date}</span>
              </div>
              <div className="article-actions">
                <button className="action-btn primary">Read Article</button>
                <button className="action-btn">Save</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderVideos = () => (
    <div className="dashboard-content">
      <div className="section-header">
        <h2>Wellness Videos</h2>
        <div className="filter-bar">
          <select className="filter-select">
            <option value="">All Categories</option>
            <option value="Fitness">Fitness</option>
            <option value="Mental Health">Mental Health</option>
            <option value="Nutrition">Nutrition</option>
          </select>
          <div className="search-bar">
            <input type="text" placeholder="Search videos..." />
            <button className="search-btn">🔍</button>
          </div>
        </div>
      </div>
      <div className="videos-grid">
        {studentData.wellnessContent.videos.map(video => (
          <div key={video.id} className="video-card">
            <div className="video-thumbnail">
              <span className="video-emoji">{video.thumbnail}</span>
              <div className="video-duration">{video.duration}</div>
              <div className="play-button">▶️</div>
            </div>
            <div className="video-content">
              <div className="video-meta">
                <span className="video-category">{video.category}</span>
                <span className="video-duration-text">{video.duration}</span>
              </div>
              <h3 className="video-title">{video.title}</h3>
              <p className="video-instructor">By {video.instructor}</p>
              <p className="video-description">{video.description}</p>
              <div className="video-stats">
                <span className="video-likes">❤️ {video.likes}</span>
                <span className="video-views">👁️ {video.views}</span>
                <span className="video-date">{video.date}</span>
              </div>
              <div className="video-actions">
                <button className="action-btn primary">Watch Video</button>
                <button className="action-btn">Save</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLibrary = () => (
    <div className="dashboard-content">
      <div className="section-header">
        <h2>My Saved Resources</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search resources..." />
          <button className="search-btn">🔍</button>
        </div>
      </div>
      <div className="resources-list">
        {studentData.savedResources.map(resource => (
          <div key={resource.id} className="resource-card">
            <div className="resource-header">
              <h3>{resource.title}</h3>
              <span className="resource-type">{resource.type}</span>
            </div>
            <p className="resource-category">Category: {resource.category}</p>
            <div className="resource-actions">
              <button className="action-btn">View</button>
              <button className="action-btn secondary">Remove</button>
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
          <h2>Student Portal</h2>
          <p>{studentData.studentId}</p>
        </div>
        
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            📊 Overview
          </button>
          <button 
            className={`nav-item ${activeTab === 'appointments' ? 'active' : ''}`}
            onClick={() => setActiveTab('appointments')}
          >
            📅 Appointments
          </button>
          <button 
            className={`nav-item ${activeTab === 'goals' ? 'active' : ''}`}
            onClick={() => setActiveTab('goals')}
          >
            🎯 Goals & Habits
          </button>
          <button 
            className={`nav-item ${activeTab === 'articles' ? 'active' : ''}`}
            onClick={() => setActiveTab('articles')}
          >
            📖 Articles
          </button>
          <button 
            className={`nav-item ${activeTab === 'videos' ? 'active' : ''}`}
            onClick={() => setActiveTab('videos')}
          >
            🎥 Videos
          </button>
          <button 
            className={`nav-item ${activeTab === 'library' ? 'active' : ''}`}
            onClick={() => setActiveTab('library')}
          >
            📚 Saved Resources
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
          <h1>Student Dashboard</h1>
          <div className="user-info">
            <span>Welcome, {studentData.name}</span>
          </div>
        </div>
        
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'appointments' && renderAppointments()}
        {activeTab === 'goals' && renderGoals()}
        {activeTab === 'articles' && renderArticles()}
        {activeTab === 'videos' && renderVideos()}
        {activeTab === 'library' && renderLibrary()}
      </div>
    </div>
  );
};

export default StudentDashboard;
