const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');

// POST contact message
router.post('/send', async (req, res) => {
  try {
    const msg = new ContactMessage(req.body);
    await msg.save();
    res.status(201).json({ message: 'Message sent!' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending message' });
  }
});

module.exports = router;
