const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

// MongoDB model for User (example)
const User = require('./models/User');

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/PMPML_database2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Register route
app.post('/api/register', async (req, res) => {
  const { firstName, lastName, email, gender, age, phone, password } = req.body;

  try {
    // Validate age and phone number
    if (age < 0) {
      return res.status(400).json({ success: false, message: 'Age cannot be negative' });
    }
    if (!/^\d{10}$/.test(phone)) {
      return res.status(400).json({ success: false, message: 'Phone number must be exactly 10 digits' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      gender,
      age,
      phone,
      password,
    });

    await newUser.save();
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'User does not exist' });
    }

    // Check if password is correct
    if (user.password !== password) {
      return res.status(400).json({ success: false, message: 'Invalid password' });
    }

    res.json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
