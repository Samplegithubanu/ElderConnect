import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to ElderConnect</h1>
      <p className="home-subtitle">A platform to connect volunteers with senior citizens.</p>

      <div className="home-links">
        <Link to="/volunteer/register" className="home-link">
          Register as Volunteer
        </Link>
        <Link to="/senior/register" className="home-link">
          Register as Senior
        </Link>
        <Link to="/seniors" className="home-link">
          View Seniors
        </Link>
      </div>
    </div>
  );
}

export default Home;
