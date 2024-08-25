import React from 'react'
import Auth from "./components/Auth.jsx";
import HeroSection from './components/HeroSection.jsx';
import IntroSection from './components/IntroSection.jsx';
import TechNewsSection from './components/TechNewsSection.jsx';
import NewProject from "./components/NewProject.jsx";


const Home = () => {
    const [authMode, setAuthMode] = useState(null);

    const handleJoinNowClick = () => {
        setAuthMode('signup');
      };
    
      const handleGetStartedClick = () => {
        setAuthMode('signin');
      };
    
      const handleAuthSuccess = () => {
        setAuthMode(null); // Reset state after successful auth
        setIsAuthenticated(true);
      };
    
      const handleAuthClick = () => {
        const authInstance = gapi.auth2.getAuthInstance();
        authInstance.signIn().then(() => {
          console.log('User signed in');
        }).catch(error => {
          console.error('Error signing in', error);
        });
      };
  return (
    <div>
        {!authMode ? (
          <HeroSection onJoinNow={handleJoinNowClick} onGetStarted={handleGetStartedClick} />
        ) : (
          <Auth isSignUp={authMode === 'signup'} onSuccess={handleAuthSuccess} />
        )}
        <IntroSection />
        <TechNewsSection />
        <NewProject />
    </div>
  )
}

export default Home
