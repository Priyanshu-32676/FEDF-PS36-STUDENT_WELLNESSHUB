import { useState } from 'react';
import './Homepage.css';

const Homepage = ({ onNavigateToSignIn, onNavigateToSignUp, onNavigateToAbout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: '🧠',
      title: 'Mental Health Support',
      description: 'Access professional counseling services and mental health resources to support your academic journey.'
    },
    {
      icon: '💪',
      title: 'Physical Wellness',
      description: 'Track your fitness goals, nutrition plans, and maintain a healthy lifestyle while studying.'
    },
    {
      icon: '🤝',
      title: 'Social Connection',
      description: 'Connect with peers, join wellness programs, and build a supportive community.'
    },
    {
      icon: '📚',
      title: 'Resource Library',
      description: 'Access a comprehensive library of articles, videos, and tools for your wellness journey.'
    }
  ];

  const stats = [
    { number: '2,500+', label: 'Students Helped' },
    { number: '150+', label: 'Wellness Resources' },
    { number: '95%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Student Wellness Hub</h2>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <button 
              className="nav-link" 
              onClick={onNavigateToAbout}
            >
              About Us
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
            <h1>Your Journey to Wellness Starts Here</h1>
            <p>
              A comprehensive platform designed to support students' mental health, 
              physical wellness, and academic success. Get personalized resources, 
              book counseling sessions, and track your wellness goals.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn primary"
                onClick={onNavigateToSignUp}
              >
                Get Started
              </button>
              <button 
                className="btn secondary"
                onClick={onNavigateToAbout}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-graphic">
              <div className="floating-card card-1">
                <span>🧠</span>
                <p>Mental Health</p>
              </div>
              <div className="floating-card card-2">
                <span>💪</span>
                <p>Fitness</p>
              </div>
              <div className="floating-card card-3">
                <span>🍎</span>
                <p>Nutrition</p>
              </div>
              <div className="floating-card card-4">
                <span>😊</span>
                <p>Wellness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
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
          <div className="section-header">
            <h2>Why Choose Student Wellness Hub?</h2>
            <p>Comprehensive support for every aspect of your student life</p>
          </div>
          
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
                Sign Up Now
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
                <li><button onClick={onNavigateToAbout}>About Us</button></li>
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

export default Homepage;
