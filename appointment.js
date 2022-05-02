// const express = require('express')
// const UserModel = require('../models/user')
const router = require("express").Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const Appointment = require("../models/appointment.model");

// All Logins Route
// router.route("/appointment").get((req, res) => {
//   Appointment.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// New Logins Route
router.get("/new", (req, res) => {
  res.render("signup/new", { user: new Appointment() });
});

// Create Appointment Route
router.post("/appointment", async (req, res) => {
  //   console.log(req.body.firstName);
  console.log(req.body);
  const { body } = req;
  const { appointmentDate, morning_afternoon, confirmation } = body;

  //   Save new user
  const newAppointment = new Appointment();
  newAppointment.appointmentDate = appointmentDate;
  newAppointment.morning_afternoon = morning_afternoon;
  newAppointment.confirmation = confirmation;
  await newAppointment.save();

  try {
    // const hashedPassword = await bcrypt.hash(req.body.password, 10)
    // users.push({
    // })
    res.render("appointment", { accountData: req.body });
  } catch {
    console.log("asjdfhkkjalfjkldhfglak");
    res.redirect("/appointment");
  }
});

module.exports = router;
