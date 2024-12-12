import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SignIn from '../components/SignIn';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from '../components/Footer';
import Content from '../components/Content';

function Home(){
    // const[user, setUser] = useState(null);

    const [showContent, setShowContent] = useState(true);

    const handleSignInClick = () => {
        console.log("Sign In button clicked");
        setShowContent(false);
    }
    
return (
    <Router>
        <div className='home'>
            <Navbar  hanleSignInClick={handleSignInClick}/>
        
        <div className="container">
            <Routes>
                <Route exact path='/signin' element={<SignIn />} />
            </Routes>
        </div>
        {showContent && <Content />}
        <Footer />
        </div>
    </Router>
);
}

export default Home;
