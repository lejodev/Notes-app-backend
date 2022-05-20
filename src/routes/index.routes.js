const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Alright maan");
});

module.exports = router;
