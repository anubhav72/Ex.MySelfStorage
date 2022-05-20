const mongoose = require("../connection");

const schema = new mongoose.Schema({
  state: String,
  city: String,
  totalSpace:Array,
  price: String,
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("locations", schema);

module.exports = model;