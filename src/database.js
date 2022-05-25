const mongoose = require("mongoose");

require("dotenv").config();

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then((db) => {
    console.log(`Connection successfully ${db.connection.host}`);
  })
  .catch((err) => {
    console.error("err", err);
  });
