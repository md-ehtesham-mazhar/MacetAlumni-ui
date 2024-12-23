import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SignIn from '../components/SignIn';
import {Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Alumni from './Alumni';
import EventPage from './EventPage';
// import Profile from '../components/Profile';
//import Homepage from './Homepage';
//import Content from '../components/Content';
// import img2 from '../images/img2.jpg'

function Home() {
    // const[user, setUser] = useState(null);

    // const [showContent, setShowContent] = useState(true);
    const [isSignedIn, setIsSignedIn] = useState(false);
    

    const handleSignInClick = () => {
        console.log("Sign In button clicked");
        // setShowContent(false);
    }

    const handleSignInSuccess = () => {
        setIsSignedIn(true); // Update state after successful sign-in
    }

    return (
            <div className='home'>
                <Navbar isSignedIn={isSignedIn} handleSignInClick={handleSignInClick} />

                <div className="container">
                    {/* <img src={img2} alt=''/> */}
                    <Routes>
                        {!isSignedIn && (
                            <Route exact path='/signin' element={<SignIn onSignInSuccess={handleSignInSuccess} />} />
                        )}

                        {isSignedIn && (
                            // <Route exact path='/profile' element={<Profile />} />
                            <>
                                <Route exact path='/home' element={<h1>Home</h1>} />
                                {/* <Route exact path='/content' element={isSignedIn ? <Homepage /> : <SignIn />} /> */}
                                {/* <Route path="/home" element={<h1>Home</h1>} /> */}
                                <Route path='/Alumni' element={<Alumni/>} />
                                <Route path="/event" element={<EventPage/>} />
                                <Route path="/post" element={<h1>Post Page</h1>} />
                                <Route path="/developer-info" element={<h1>Developer Info</h1>} />
                            </>
                        )}
                    </Routes>
                </div>
                <div className="separation"></div>
                {/* {showContent && <Content />} */}
                <Footer />
            </div>
        
    );
}

export default Home;
