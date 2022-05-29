const mongoose = require("../connection");

const schema = new mongoose.Schema({
  username: String,
  email: String,
  mobile: Number,
  password: String,
  avatar: String,
  isAdmin: { type: Boolean, default: false },
  createAt: { type: Date, default: new Date() },
});

const model = mongoose.model("users", schema);

module.exports = model;
