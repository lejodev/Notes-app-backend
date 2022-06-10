const express = require("express");
const noteSchema = require("../models/note.schema");

const router = express.Router();

router.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  noteSchema.find({ userId: userId }, (err, doc) => {
    if (err) {
      res.status(400).json({ Error: err });
    } else {
      res.status(200).json({ doc });
    }
  });
});

router.post("/:userId", (req, res) => {
  const userId = req.params.userId;
  const { title, body } = req.body;
  const note = new noteSchema({ title, body, userId });
  note.save((err, doc) => {
    if (err) {
      res.status(400).json({ Error: err });
    } else {
      res.status(200).json({ Message: "Success", doc });
    }
  });
});

router.patch("/:noteId", (req, res) => {
  const { noteId } = req.params;
  const { title, body } = req.body;
  noteSchema.findByIdAndUpdate(noteId, { title, body }, (err, doc) => {
    if (err) {
      res.status(400).json({ Error: err });
    } else {
      res.status(200).json({ Message: "Success" });
    }
  });
});

router.delete("/:noteId", (req, res) => {
  const noteId = req.params.noteId;
  noteSchema.findOneAndDelete({ _id: noteId }, (err, doc) => {
    if (err) {
      res.status(400).json({ Error: err });
    } else {
      res.status(200).json({ Message: "Deleted successfully" });
    }
  });
});

module.exports = router;
