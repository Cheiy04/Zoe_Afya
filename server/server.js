// Starting the server

module.exports = function runServer() {
  // Import required scripts

  const express = require('express')
  const app = express();
  const cors = require('cors');
  const connectDB = require('./db')

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  // ----------------------Import Routes---------------------
  const smsRoute = require('./routes/smsRoute')
  const loginRoute = require('./routes/loginRoute')
  const signupRoute = require('./routes/signupRoute')


  // --------------------Use Routes-------------------------
  app.use(smsRoute)
  app.use(loginRoute)
  app.use(signupRoute)


  // Ensure connection to database is successful
  connectDB();

  // --------------------Run Server---------------------------
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
  });


};

