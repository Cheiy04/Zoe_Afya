const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const User = require('../models/User')

const router = express.Router();


// MongoDB Atlas connection string
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.vn2ssmg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });



router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
});

module.exports = router
