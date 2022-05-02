const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  email: {
    type: String,
    default: "",
    required: true,
  },
  appointmentDate: {
    type: String,
    default: "",
    required: true,
  },
  morning_afternoon: {
    type: String,
    default: "",
    required: true,
  },
  confirmation: {
    type: String,
    default: "",
    required: true,
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
