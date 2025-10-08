import { useState } from 'react';
import './Auth.css';

const SignIn = ({ onSignIn, onSwitchToSignUp }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student' // 'student' or 'admin'
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'radio' ? value : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call with authentication validation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple authentication check (in real app, this would be server-side)
      const validCredentials = {
        'student@example.com': { password: 'student123', role: 'student' },
        'admin@example.com': { password: 'admin123', role: 'admin' },
        'teacher@example.com': { password: 'teacher123', role: 'admin' }
      };
      
      const userCredentials = validCredentials[formData.email];
      
      if (userCredentials && userCredentials.password === formData.password && userCredentials.role === formData.role) {
        // Authentication successful
        if (onSignIn) {
          onSignIn(formData);
        }
        console.log('Sign in successful:', formData);
      } else {
        // Authentication failed
        setErrors({ general: 'Invalid email, password, or role. Please check your credentials.' });
      }
    } catch (error) {
      console.error('Sign in error:', error);
      setErrors({ general: 'Sign in failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          {errors.general && (
            <div className="error-message general-error">
              {errors.general}
            </div>
          )}
          
          <div className="form-group">
            <label>Select Role</label>
            <div className="role-selection">
              <div className="role-option">
                <input
                  type="radio"
                  id="student"
                  name="role"
                  value="student"
                  checked={formData.role === 'student'}
                  onChange={handleChange}
                />
                <label htmlFor="student" className="role-label">
                  🎓 Student
                </label>
              </div>
              <div className="role-option">
                <input
                  type="radio"
                  id="admin"
                  name="role"
                  value="admin"
                  checked={formData.role === 'admin'}
                  onChange={handleChange}
                />
                <label htmlFor="admin" className="role-label">
                  👨‍💼 Admin
                </label>
              </div>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="Enter your email"
              disabled={isLoading}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
              placeholder="Enter your password"
              disabled={isLoading}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>
          
          <div className="form-options">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Remember me
            </label>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>
          
          <button 
            type="submit" 
            className="auth-button primary"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        <div className="auth-footer">
          <p>
            Don't have an account?{' '}
            <button 
              type="button" 
              className="link-button"
              onClick={onSwitchToSignUp}
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
