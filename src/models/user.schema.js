const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: { type: String },
  password: { type: String },
});
module.exports = mongoose.model("User", UserSchema);
