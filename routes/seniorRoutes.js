const express = require('express');
const router = express.Router();
const Senior = require('../models/Senior');

// Register a senior
router.post('/register', async (req, res) => {
  try {
    const existing = await Senior.findOne({ email: req.body.email });
    if (existing) {
      return res.status(409).json({ message: 'Email already registered' });
    }
    const senior = new Senior(req.body);
    await senior.save();
    res.status(201).json({ message: 'Senior registered successfully' });
  } catch (error) {
    console.error('Error registering senior:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all seniors
router.get('/', async (req, res) => {
  try {
    const seniors = await Senior.find();
    res.status(200).json(seniors);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
