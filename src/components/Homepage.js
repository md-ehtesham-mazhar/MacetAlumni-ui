import React from 'react'
import { Link } from 'react-router-dom';

function Homepage() {
  return (

    <div className="homepage">
      <div className='slide'><Link to="/" className="element">Home</Link>
        <Link to="/" className="element">Event</Link>
        <Link to="/" className="element">Alumni Page</Link>
        <Link to="/" className="element">Feedback</Link>
        <Link to="/" className="developer">Developer</Link>
      </div>
      <div className="area"></div>
    </div>

  )
}

export default Homepage
