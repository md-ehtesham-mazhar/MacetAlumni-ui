import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import img1 from '../images/img1.jpg'

function Navbar({ hanleSignInClick }) {
    const location = useLocation();

    const isSignInPage = location.pathname === '/signin';
    
    return (
        <div>
            <nav className="navbar">
                <div className='nav-logo'>
                    <img src={img1} alt="" width="50" />
                    <div className="logo">
                        <Link className="navbar-brand" to="/">MACET</Link>
                        <Link className="navbar-brand" t="/">Alumni</Link>
                    </div>
                </div>
                <div className='nav-element'>
                </div>
                {!isSignInPage && (
                    <Link to="/signin">
                        <button className="btn" onClick={hanleSignInClick} type='button'>Sign In</button>
                    </Link>
                )}
            </nav>
        </div>
    )
}

export default Navbar
