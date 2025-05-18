import React, { useState } from 'react';
import './Emergency.css'; // Optional: for custom styles

function Emergency() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Emergency Help Request</h2>
      <p style={styles.subtitle}>Please describe your issue and a volunteer will be notified immediately.</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your emergency..."
          style={styles.textarea}
          required
        ></textarea>
        <button type="submit" style={styles.button}>Send Alert</button>
      </form>

      {submitted && <p style={styles.success}>Help alert sent successfully!</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#fff3f3',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '10px',
    color: '#c0392b',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#6e2c00',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  textarea: {
    minHeight: '120px',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    padding: '10px',
    fontSize: '1rem',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  success: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: '15px',
  },
};

export default Emergency;
