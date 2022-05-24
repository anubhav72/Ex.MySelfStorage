const mongoose = require("../connection");

const schema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  username: String,
  isAdmin: { type: Boolean, default: false },
  createAt: { type: Date, default: new Date() },
});

const model = mongoose.model("users", schema);

module.exports = model;
