const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');

router.post('/register', async (req, res) => {
  try {
    const newVolunteer = new Volunteer(req.body);
    await newVolunteer.save();
    res.status(201).json({ message: 'Volunteer registered successfully' });
  } catch (error) {
    // Check for duplicate email error
    if (error.code === 11000 && error.keyPattern?.email) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    console.error('Error saving volunteer:', error);
    res.status(500).json({ message: 'Error registering volunteer' });
  }
});



module.exports = router;
