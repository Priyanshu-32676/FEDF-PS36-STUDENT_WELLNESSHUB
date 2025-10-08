import { useState } from 'react';
import './Aboutus.css';

const Aboutus = ({ onNavigateToHome, onNavigateToSignIn, onNavigateToSignUp }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Lead Wellness Coordinator',
      image: '👩‍⚕️',
      description: 'Licensed psychologist with 10+ years experience in student mental health.'
    },
    {
      name: 'Michael Chen',
      role: 'Technology Director',
      image: '👨‍💻',
      description: 'Full-stack developer passionate about creating accessible wellness technology.'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Nutrition Specialist',
      image: '👩‍🍳',
      description: 'Registered dietitian specializing in student nutrition and healthy eating habits.'
    },
    {
      name: 'James Wilson',
      role: 'Fitness Coordinator',
      image: '👨‍🏋️',
      description: 'Certified personal trainer focused on student-friendly fitness programs.'
    }
  ];

  const projectStats = [
    { number: '2,500+', label: 'Students Supported' },
    { number: '150+', label: 'Wellness Resources' },
    { number: '95%', label: 'User Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  const features = [
    {
      icon: '🧠',
      title: 'Mental Health Support',
      description: 'Professional counseling services, stress management tools, and mental health resources tailored for students.'
    },
    {
      icon: '💪',
      title: 'Physical Wellness',
      description: 'Fitness tracking, nutrition guidance, and exercise programs designed for busy student schedules.'
    },
    {
      icon: '🤝',
      title: 'Community Building',
      description: 'Connect with peers, join wellness groups, and participate in community wellness challenges.'
    },
    {
      icon: '📚',
      title: 'Educational Resources',
      description: 'Comprehensive library of articles, videos, and interactive tools for holistic wellness education.'
    }
  ];

  return (
    <div className="about-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Student Wellness Hub</h2>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <button 
              className="nav-link" 
              onClick={onNavigateToHome}
            >
              Home
            </button>
            <button 
              className="nav-link" 
              onClick={onNavigateToSignIn}
            >
              Sign In
            </button>
            <button 
              className="nav-btn primary" 
              onClick={onNavigateToSignUp}
            >
              Sign Up
            </button>
          </div>
          
          <div 
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>About Student Wellness Hub</h1>
            <p>
              A comprehensive platform designed to support students' mental health, 
              physical wellness, and academic success through innovative technology 
              and evidence-based practices.
            </p>
          </div>
          <div className="hero-image">
            <div className="wellness-illustration">
              <div className="illustration-card">
                <span>🎓</span>
                <p>Student Success</p>
              </div>
              <div className="illustration-card">
                <span>💚</span>
                <p>Wellness Focus</p>
              </div>
              <div className="illustration-card">
                <span>🤝</span>
                <p>Community Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                To create a safe, accessible, and comprehensive wellness platform that empowers 
                students to take control of their mental and physical health. We believe that 
                student success is directly linked to overall well-being, and our platform 
                provides the tools and resources needed to thrive academically and personally.
              </p>
              <div className="mission-values">
                <div className="value-item">
                  <span className="value-icon">🎯</span>
                  <h3>Accessibility</h3>
                  <p>Making wellness resources available to all students, regardless of background or circumstances.</p>
                </div>
                <div className="value-item">
                  <span className="value-icon">🔒</span>
                  <h3>Confidentiality</h3>
                  <p>Ensuring complete privacy and security for all student interactions and data.</p>
                </div>
                <div className="value-item">
                  <span className="value-icon">📈</span>
                  <h3>Evidence-Based</h3>
                  <p>Using scientifically proven methods and resources to support student wellness.</p>
                </div>
              </div>
            </div>
            <div className="mission-image">
              <div className="mission-graphic">
                <div className="graphic-element">
                  <span>📊</span>
                  <p>Analytics</p>
                </div>
                <div className="graphic-element">
                  <span>🎯</span>
                  <p>Goals</p>
                </div>
                <div className="graphic-element">
                  <span>💪</span>
                  <p>Progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            {projectStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Platform Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Our Team</h2>
          <p className="team-intro">
            Meet the dedicated professionals behind Student Wellness Hub, 
            committed to supporting your wellness journey.
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image">
                  {member.image}
                </div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="tech-section">
        <div className="container">
          <div className="tech-content">
            <div className="tech-text">
              <h2>Built with Modern Technology</h2>
              <p>
                Our platform is built using cutting-edge web technologies to ensure 
                fast, secure, and accessible user experiences across all devices.
              </p>
              <div className="tech-stack">
                <div className="tech-item">
                  <span className="tech-icon">⚛️</span>
                  <h4>React</h4>
                  <p>Modern UI framework for responsive interfaces</p>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">🔒</span>
                  <h4>Security</h4>
                  <p>End-to-end encryption and secure authentication</p>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">📱</span>
                  <h4>Mobile-First</h4>
                  <p>Responsive design optimized for all devices</p>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">☁️</span>
                  <h4>Cloud-Based</h4>
                  <p>Scalable infrastructure for reliable performance</p>
                </div>
              </div>
            </div>
            <div className="tech-visual">
              <div className="tech-diagram">
                <div className="diagram-node">
                  <span>👤</span>
                  <p>User</p>
                </div>
                <div className="diagram-arrow">→</div>
                <div className="diagram-node">
                  <span>🌐</span>
                  <p>Platform</p>
                </div>
                <div className="diagram-arrow">→</div>
                <div className="diagram-node">
                  <span>💚</span>
                  <p>Wellness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Wellness Journey?</h2>
            <p>Join thousands of students who have transformed their lives with our platform</p>
            <div className="cta-buttons">
              <button 
                className="btn primary large"
                onClick={onNavigateToSignUp}
              >
                Get Started Today
              </button>
              <button 
                className="btn secondary large"
                onClick={onNavigateToSignIn}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Student Wellness Hub</h3>
              <p>Supporting students' mental health and wellness journey</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><button onClick={onNavigateToHome}>Home</button></li>
                <li><button onClick={onNavigateToSignIn}>Sign In</button></li>
                <li><button onClick={onNavigateToSignUp}>Sign Up</button></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Student Wellness Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Aboutus;
