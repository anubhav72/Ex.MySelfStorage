const mongoose = require("../connection");

const schema = new mongoose.Schema({
  username:String,
  email: String,
  password: String,
  username: String,
  age: Number,
  createAt: { type: Date, default: new Date() },
});

const model = mongoose.model("users", schema);

module.exports = model;