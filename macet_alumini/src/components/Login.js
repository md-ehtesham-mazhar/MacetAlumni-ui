import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label>Registration Number</label>
          <input type="password" className="form-control" placeholder="Enter your registration number" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default Login;
