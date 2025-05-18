import React, { useState } from 'react';
import axios from 'axios';

function Login({ userType }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const endpoint = userType === 'volunteer'
        ? 'http://localhost:5000/api/volunteers/login'
        : 'http://localhost:5000/api/seniors/login';

      const res = await axios.post(endpoint, { email, password });
      localStorage.setItem('user', JSON.stringify(res.data));
      alert('Login successful!');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login as {userType}</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#fdfefe',
    padding: '40px',
    borderRadius: '10px',
    width: '320px',
    margin: '50px auto',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  title: {
    marginBottom: '25px',
    color: '#2c3e50',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default LoginVolunteer;
