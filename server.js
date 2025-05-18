const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/elderconnect', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const volunteerRoutes = require('./routes/volunteerRoutes');
app.use('/api/Volunteers', volunteerRoutes);
const seniorRoutes = require('./routes/seniorRoutes');
app.use('/api/seniors', seniorRoutes);
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);
const emergencyHelpRoutes = require('./routes/emergencyHelpRoutes');
app.use('/api/emergency', emergencyHelpRoutes);
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);




app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
