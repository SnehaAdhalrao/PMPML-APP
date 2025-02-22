const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register User
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password, gender } = req.body;
    const newUser = new User({ firstName, lastName, email, password, gender });
    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(400).send('Error registering user: ' + error.message);
  }
});

// Login User
router.post('/register_or_login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && user.password === password) {
      res.status(200).send('Login successful');
    } else {
      res.status(400).send('Invalid credentials');
    }
  } catch (error) {
    res.status(400).send('Error logging in: ' + error.message);
  }
});

module.exports = router;
