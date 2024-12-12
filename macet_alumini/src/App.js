import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>  
      <div className="container">
        <Navbar />
        <Routes>  
          <Route path="/" element={<Login />} />  
          <Route path="/signup" element={<SignUp />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
