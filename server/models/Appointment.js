// Schema for getting appointment details

const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
