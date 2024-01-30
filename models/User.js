const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  _id: Number,
  ver:Number
});

module.exports = mongoose.model("user", userSchema);
