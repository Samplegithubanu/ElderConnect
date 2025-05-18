import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import VolunteerRegister from './pages/VolunteerRegister';
import SeniorRegister from './pages/SeniorRegister';
import ViewSeniors from './pages/ViewSeniors';
import Navbar from './components/Navbar'; // 👈 import Navbar
import VolunteerDashboard from './pages/VolunteerDashboard';
import SeniorDashboard from './pages/SeniorDashboard';
import './App.css';
import './styles.css';



function App() {
  return (
    <Router>
      <Navbar />  {/* 👈 This will appear at the top on every page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteer/register" element={<VolunteerRegister />} />
        <Route path="/senior/register" element={<SeniorRegister />} />
        <Route path="/seniors" element={<ViewSeniors />} />
        <Route path="/login/volunteer" element={<LoginVolunteer />} />
        <Route path="/login/senior" element={<LoginSenior />} />
        <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
<Route path="/senior/dashboard" element={<SeniorDashboard />} />
<Route path="/contact" element={<ContactVolunteer />} />



      </Routes>
    </Router>
  );
}

export default App;
