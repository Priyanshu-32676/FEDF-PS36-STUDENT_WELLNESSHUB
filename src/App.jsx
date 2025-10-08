import { useState } from 'react'
import Homepage from './components/Homepage'
import SignIn from './components/signIn'
import SignUp from './components/signup'
import Aboutus from './components/Aboutus'
import StudentDashboard from './components/student'
import AdminDashboard from './components/Admin'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('home') // 'home', 'signin', 'signup', 'about'
  const [user, setUser] = useState(null)

  const handleSignIn = (userData) => {
    console.log('User signed in:', userData)
    setUser(userData)
    // Here you would typically handle authentication logic
    // For now, we'll just log the data
  }

  const handleSignUp = (userData) => {
    console.log('User signed up:', userData)
    setUser(userData)
    // Here you would typically handle registration logic
    // For now, we'll just log the data
  }

  const handleSignOut = () => {
    setUser(null)
    setCurrentView('home')
  }

  // If user is authenticated, show appropriate dashboard based on role
  if (user) {
    if (user.role === 'student') {
      return <StudentDashboard user={user} onSignOut={handleSignOut} />
    } else if (user.role === 'admin') {
      return <AdminDashboard user={user} onSignOut={handleSignOut} />
    }
  }

  // Navigation handlers
  const handleNavigateToHome = () => setCurrentView('home')
  const handleNavigateToSignIn = () => setCurrentView('signin')
  const handleNavigateToSignUp = () => setCurrentView('signup')
  const handleNavigateToAbout = () => setCurrentView('about')

  // Render different views
  if (currentView === 'home') {
    return (
      <Homepage 
        onNavigateToSignIn={handleNavigateToSignIn}
        onNavigateToSignUp={handleNavigateToSignUp}
        onNavigateToAbout={handleNavigateToAbout}
      />
    )
  }

  if (currentView === 'about') {
    return (
      <Aboutus 
        onNavigateToHome={handleNavigateToHome}
        onNavigateToSignIn={handleNavigateToSignIn}
        onNavigateToSignUp={handleNavigateToSignUp}
      />
    )
  }

  return (
    <div className="auth-container">
      <div className="app-title">
        <h1>Welcome to Student Wellness Hub</h1>
        <p>Your comprehensive platform for academic success and personal well-being</p>
      </div>
      
      {currentView === 'signin' ? (
        <SignIn 
          onSignIn={handleSignIn}
          onSwitchToSignUp={() => setCurrentView('signup')}
        />
      ) : (
        <SignUp 
          onSignUp={handleSignUp}
          onSwitchToSignIn={() => setCurrentView('signin')}
        />
      )}
    </div>
  )
}

export default App
