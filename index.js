const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

// router.get('/signup')

module.exports = router;
