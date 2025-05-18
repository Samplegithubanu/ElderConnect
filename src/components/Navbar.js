import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>ElderConnect</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/volunteer/register" style={styles.link}>Register Volunteer</Link>
        <Link to="/senior/register" style={styles.link}>Register Senior</Link>
        <Link to="/seniors" style={styles.link}>View Seniors</Link>
        <Link to="/login/volunteer">Volunteer Login</Link> | 
        <Link to="/login/senior">Senior Login</Link>
        <Link to="/contact">Contact a Volunteer</Link>


      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#4A90E2',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    margin: 0,
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default Navbar;
