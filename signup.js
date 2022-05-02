// const express = require('express')
// const UserModel = require('../models/user')
const router = require("express").Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/signup.model");

// All Logins Route
// router.route('/').get((req, res) => {
//     User.find()
//         .then(users => res.json(users))
//         .catch(err => res.status(400).json('Error: ' + err));
// })

// New Logins Route
router.get("/new", (req, res) => {
  res.render("signup/new", { user: new User() });
});

// Create Signup Route
// router.post("/signup", async (req, res, next) => {
router.post("/signup", async (req, res, next) => {
  //   const user = req.body;
  //   const newUser = new User({ user });
  // const user = new User({
  //     // firstName: req.body.firstName,
  //     // lastName: req.body.lastName,
  //     // email: req.body.email,
  //     // password: req.body.password,
  //     // dob: req.body.dob,
  //     // gender: req.body.gender
  //     user: req.body
  // })
  const { body } = req;
  const { firstName, lastName, password } = body;
  let { email } = body;

  User.find(
    {
      email: email,
    },
    (err, existingUser) => {
      if (err) {
        return res.send({
          success: false,
          message: "Errror: Server errorrrr",
        });
      } else if (existingUser.length > 0) {
        return res.send({
          success: false,
          message: "Error: Account already exists",
        });
      }

      // Save new user
      const newUser = new User();

      newUser.email = email;
      newUser.firstName = firstName;
      newUser.lastName = lastName;
      newUser.password = bcrypt.hashSync(password, saltRounds);
      //   newUser.save((err, user) => {
      //     if (err) {
      //       return res.send({
      //         success: false,
      //         message: "Error: Server error",
      //       });
      //     }
      //     return res.send({
      //       success: true,
      //       message: "Signed up",
      //     });
      //   });
    }
  );

  //   try {
  //     console.log("BEFORE SAVE");
  //     const newUser = await user.save();
  //     // res.json(user)
  //     console.log(user);
  //     console.log("AFTER SAVE");
  //     res.redirect("signup_success");
  //   } catch {
  //     res.redirect("signup");
  //     console.log("SAVE FAIL");
  //   }
});

module.exports = router;
