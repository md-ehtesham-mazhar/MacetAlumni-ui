import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SignIn from '../components/SignIn';
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Alumni from './Alumni';
import EventPage from './EventPage';
import ProfilePage from '../components/Profile';

function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignInClick = () => {
    console.log("Sign In button clicked");
  };

  const handleSignInSuccess = () => {
    setIsSignedIn(true); // Update state after successful sign-in
  };

  const handleLogout = () => {
    setIsSignedIn(false); // Update state to reflect logout
  };

  return (
    <div className='home'>
      <Navbar isSignedIn={isSignedIn} handleSignInClick={handleSignInClick} />

      <div className="container">
        <Routes>
          {!isSignedIn && (
            <Route exact path='/signin' element={<SignIn onSignInSuccess={handleSignInSuccess} />} />
          )}

          {isSignedIn && (
            <>
              <Route exact path='/home' element={<h1>Home</h1>} />
              <Route path='/Alumni' element={<Alumni />} />
              <Route path="/event" element={<EventPage />} />
              <Route path="/post" element={<h1>Post Page</h1>} />
              <Route path="/developer-info" element={<h1>Developer Info</h1>} />
              <Route path="/profile" element={<ProfilePage onLogout={handleLogout} />} />
            </>
          )}
        </Routes>
      </div>
      <div className="separation"></div>
      <Footer />
    </div>
  );
}

export default Home;


