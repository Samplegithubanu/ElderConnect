import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SeniorProfiles.css'; // optional CSS file for styling

function SeniorProfiles() {
  const [seniors, setSeniors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/seniors') // make sure this route exists in your backend
      .then(res => setSeniors(res.data))
      .catch(err => console.error('Error fetching seniors:', err));
  }, []);

  return (
    <div className="profiles-container">
      <h2>Senior Profiles</h2>
      <div className="cards-wrapper">
        {seniors.map(senior => (
          <div key={senior._id} className="card">
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

export default SeniorProfiles;
