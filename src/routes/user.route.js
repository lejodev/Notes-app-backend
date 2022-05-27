const express = require("express");
const userSchema = require("../models/user.schema");

const router = express.Router();

router.get("/all", (req, res) => {
  userSchema.find({}, (err, users) => {
    if (err) {
      res.status(400).json({ Error: err });
    } else {
      res.status(200).json(users);
    }
  });
});

router.get("/:userId", (req, res) => {
  const { userId } = req.params;
  userSchema.findById(userId, (err, user) => {
    if (err) {
      res.status(400).json({ Error: err });
    } else {
      res.status(200).json(user);
    }
  });
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

router.patch("/:userId", (req, res) => {
  const { userId } = req.params;
  const { userName, password } = req.body;

  userSchema.findByIdAndUpdate(userId, { userName, password }, (err, docs) => {
    if (err) {
      res.status(400).json({ Error: err });
    } else {
      res.status(200).json(docs);
    }
  });
});

router.delete("/:userId", (req, res) => {
  const { userId } = req.params;
  userSchema.findByIdAndDelete(userId, (err, docs) => {
    if (err) {
      res.status(400).json({ Error: err });
    } else {
      res.status(200).json({ Message: docs });
    }
  });
});

module.exports = router;
