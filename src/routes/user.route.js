const express = require("express");
const userSchema = require("../models/user.schema");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Alright maan");
});

router.post("/", async (req, res) => {
  const { userName, password } = req.body;

  const findUser = await userSchema.find({ userName: userName }).exec();
  if (findUser.length === 0) {
    const user = new userSchema({ userName, password });
    user.save((err, result) => {
      if (err) {
        res.status(400).json({ ERROR: err });
      } else {
        res.status(200).json({ Message: "Success" });
      }
    });
  } else {
    res.status(400).json({ Message: "User already exists" });
  }
});

module.exports = router;
