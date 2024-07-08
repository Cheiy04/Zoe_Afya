const sendSMS = require("./sendSMS");

const express = require('express')
const app = express();
const cors = require('cors');

module.exports = function smsServer() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
  });

  app.post('/send-sms', async (req, res) => {
    try {
      const { number, message } = req.body;
      const response = await sendSMS(number, message);
      res.status(200).send({ message: 'Success!!', data: response });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error in sending the message', error });
    }
  });
};

