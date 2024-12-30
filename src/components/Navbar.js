import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import img1 from '../images/img1.jpg';

function Navbar({ isSignedIn, hanleSignInClick }) {
    const location = useLocation();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    const isSignInPage = location.pathname === '/signin';

    return (
        <nav className="navbar">
            <div className="nav-left">
                <div className="nav-logo">
                    <img src={img1} alt="logo" className="logo-img" />
                    <div className="logo">
                        <Link className="navbar-brand" to="https://macet.ac.in/">
                            <span>Maulana Azad College</span>
                            <span>of Engineering and Technology</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Hamburger button - toggles the menu */}
            <button
                className="hamburger"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
            >
                &#9776;
            </button>

            {/* Navigation links - shown based on screen size */}
            <div className={`nav-elements ${isMenuOpen ? 'active' : ''}`}>
                {isSignedIn && (
                    <>
                        <Link className="element" to="/home">Home</Link>
                        <Link className="element" to="/Alumni">Alumni</Link>
                        <Link className="element" to="/event">Event</Link>
                        <Link className="element" to="/post">Post</Link>
                    </>
                )}
            </div>

            <div className="nav-right">
                {!isSignInPage && !isSignedIn && (
                    <Link to="/signin">
                        <button className="btn" onClick={hanleSignInClick} type="button">Sign In</button>
                    </Link>
                )}
                {isSignedIn && (
                    <Link className='nav-prof-img' to="/profile">
                        <img src="https://via.placeholder.com/150" alt="Profile" />
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
