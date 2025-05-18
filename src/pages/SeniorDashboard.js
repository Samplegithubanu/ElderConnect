import React from 'react';

function SeniorDashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Senior Dashboard</h1>
      <p style={styles.subtitle}>Welcome, {user?.name || 'Volunteer'}!</p>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#eaf2f8',
    padding: '50px',
    minHeight: '100vh',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '15px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#5d6d7e',
  }
};

export default SeniorDashboard;
