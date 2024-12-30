import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Call onLogout to update the signed-in state in the parent component
    onLogout();
    // Navigate to the SignIn page
    navigate('/signin');
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Your Profile</h1>
      </div>
      <div className="profile-content">
        <div className="profile-sidebar">
          <div className="profile-image">
            <img src="https://via.placeholder.com/150" alt="Profile" />
          </div>
          <div className="profile-actions">
            <button className="btn-edit">Edit Profile</button>
            <button onClick={handleLogout} className="btn-logout">Log Out</button>
          </div>
        </div>
        <div className="profile-details">
          <h2>Personal Details</h2>
          <div className="profile-detail">
            <label>Name:</label>
            <p>XYZ</p>
          </div>
          <div className="profile-detail">
            <label>Email:</label>
            <p>xyz@example.com</p>
          </div>
          <div className="profile-detail">
            <label>Location:</label>
            <p>Delhi, India</p>
          </div>
          <div className="profile-detail">
            <label>Joined:</label>
            <p>January 1, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
