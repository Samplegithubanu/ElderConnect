const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');
const Senior = require('../models/Senior');

router.post('/login/volunteer', async (req, res) => {
  const { email } = req.body;
  const volunteer = await Volunteer.findOne({ email });
  if (volunteer) return res.status(200).json({ message: 'Volunteer login successful', volunteer });
  res.status(404).json({ message: 'Volunteer not found' });
});

router.post('/login/senior', async (req, res) => {
  const { email } = req.body;
  const senior = await Senior.findOne({ email });
  if (senior) return res.status(200).json({ message: 'Senior login successful', senior });
  res.status(404).json({ message: 'Senior not found' });
});

module.exports = router;
