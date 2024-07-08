const express = require('express')
const sendSMS = require("../sendSMS");

const router = express.Router()

router.post('/send-sms', async (req, res) => {
    try {
      const { number, message } = req.body;
      const response = await sendSMS(number, message);
      res.status(200).send({ message: 'Success!!', data: response });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error in sending the message', error });
    }
  });

module.exports= router;