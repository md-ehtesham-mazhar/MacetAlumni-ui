import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import img1 from '../images/img1.jpg'

function Navbar({ isSignedIn, hanleSignInClick }) {
    const location = useLocation();

    const isSignInPage = location.pathname === '/signin';

    return (
        <div>
            <nav className="navbar">
                <div className="nav-left">
                    <div className="nav-logo">
                        <img src={img1} alt="logo" width="50" />
                        <div className="logo">
                            <Link className="navbar-brand" to="https://macet.ac.in/"><span>Maulana Azad College</span> <span>of Engineering and Technology</span></Link>
                            {/* <Link className="navbar-brand" to="https://macet.ac.in/"></Link> */}
                        </div>
                    </div>
                    {/* Navigation elements */}
                    
                    {isSignedIn && (
                        <div className="nav-elements">
                            <Link className="element" to="/home">Home</Link>
                            <Link className="element" to="/Alumni">Alumni</Link>
                            <Link className="element" to="/event">Event</Link>
                            <Link className="element" to="/post">Post</Link>
                        </div>
                    )}
                </div>

                {/* Profile button at the end */}
                    <div className="nav-right">
                        {!isSignInPage && !isSignedIn && (
                        <Link to="/signin">
                            <button className="btn" onClick={hanleSignInClick} type="button">Sign In</button>
                        </Link>
                    )}
                    {isSignedIn && (
                        <Link to="/profile">
                            <button className="btn" type="button">Profile</button>
                        </Link>
                    )}   
                    </div>
               
            </nav>
        </div>
    )
}

export default Navbar
