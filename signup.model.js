const bcrypt = require("bcrypt");
const saltRounds = 10;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    default: "",
    required: true,
  },
  lastName: {
    type: String,
    default: "",
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
    default: "",
  },
  //   dob: {
  //     type: String,
  //     required: true,
  //   },
  //   gender: {
  //     type: String,
  //     required: true,
  //   },
});

userSchema.methods.generateHash = function (password) {
  return bcrypt.hash(password, saltRounds, function (err, hash) {});
};

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
