import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission (you can replace this with actual form submission logic later)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up:', { registrationNumber, username, password });
    // Here you can add logic to save or submit the data
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Registration Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your registration number"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/">Login</Link></p>
    </div>
  );
};

export default SignUp;
