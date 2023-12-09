import React from 'react';
import './Home.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className="home-container">
      <h1>Welcome to WCE</h1>
      <p>Choose your role:</p>
      <div className="button-container">
        <button className="faculty-button"><Link to="/flogin">Faculty</Link></button>
        <button className="student-button"><Link to="/login">Student</Link></button>
      </div>
    </div>
    </>
  );
};

export default Home;
