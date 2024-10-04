const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register User
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password, gender } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const newUser = new User({ firstName, lastName, email, password: hashedPassword, gender });
    await newUser.save();
    res.status(200).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Error registering user: ' + error.message });
  }
});

// Login User
router.post('/register_or_login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) { // Compare hashed passwords
      res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      res.status(200).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error logging in: ' + error.message });
  }
});

module.exports = router;
