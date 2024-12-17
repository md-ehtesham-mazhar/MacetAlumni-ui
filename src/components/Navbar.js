import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import img1 from '../images/img1.jpg'

function Navbar({ isSignedIn,hanleSignInClick }) {
    const location = useLocation();

    const isSignInPage = location.pathname === '/signin';
    
    return (
        <div>
            <nav className="navbar">
                <div className='nav-logo'>
                    <a href='https://macet.ac.in/'>
                    <img className='logoImg' src={img1} alt="" width="50" />
                    </a>
                    <div className="logo">
                        <Link className="navbar-brand" to="https://macet.ac.in/">Maulana Azad College</Link> <Link className='navbar-brand'>of Engineering 
                        & Technology </Link>
                        {/* <Link className="navbar-brand" t="/">Alumni</Link> */}
                    </div>
                </div>
                <div className='nav-element'>
                </div>
                {!isSignInPage && !isSignedIn && (
                    <Link to="/signin">
                        <button className="btn" onClick={hanleSignInClick} type='button'>Sign In</button>
                    </Link>
                )}
            </nav>
        </div>
    )
}

export default Navbar
