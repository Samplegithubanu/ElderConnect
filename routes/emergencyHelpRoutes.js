const express = require('express');
const router = express.Router();
const EmergencyHelp = require('../models/EmergencyHelp');

// POST: Submit emergency request
router.post('/request', async (req, res) => {
  try {
    const helpRequest = new EmergencyHelp(req.body);
    await helpRequest.save();
    res.status(201).json({ message: 'Emergency request sent!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send request' });
  }
});

// GET: Get all requests
router.get('/requests', async (req, res) => {
  try {
    const requests = await EmergencyHelp.find();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch requests' });
  }
});

module.exports = router;
