const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongo:27017/notes")
  .then((db) => {
    console.log(`Connection successfully ${db.connection.host}`);
  })
  .catch((err) => {
    console.error("err", err);
  });
