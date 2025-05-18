import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewSeniors.css';

function ViewSeniors() {
  const [seniors, setSeniors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/seniors')
      .then(res => setSeniors(res.data))
      .catch(err => console.error('Error fetching seniors:', err));
  }, []);

  return (
    <div className="view-seniors-container">
      <h2>Senior Profiles</h2>
      <div className="senior-cards">
        {seniors.map((senior, index) => (
          <div key={index} className="senior-card">
            <h3>{senior.name}</h3>
            <p><strong>Age:</strong> {senior.age}</p>
            <p><strong>Location:</strong> {senior.location}</p>
            <p><strong>Needs:</strong> {senior.needs}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewSeniors;
