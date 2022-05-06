const mongoose = require("../connection");

const schema = new mongoose.Schema({
  state: String,
  city: String,
  totalSpace:String,
  price: Number,
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("users", schema);

module.exports = model;