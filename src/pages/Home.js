import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SignIn from '../components/SignIn';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from '../components/Footer';
import Homepage from '../components/Homepage';


function Home() {
    

    const [isSignedIn, setIsSignedIn] = useState(false);

    const handleSignInClick = () => {
        console.log("Sign In button clicked");
       
    }

    const handleSignInSuccess = () => {
        setIsSignedIn(true);
    }
    return (
        <Router>
            <div className='home'>
                <Navbar isSignedIn={isSignedIn} handleSignInClick={handleSignInClick} />

                <div className="container">
                    <Routes>
                        <Route exact path='/signin' element={<SignIn />} />
                        <Route exact path='/Homepage' element={<Homepage />} />
            
                    </Routes>

                </div>
               
                <Footer />
            </div>
        </Router>
    );
}

export default Home;
