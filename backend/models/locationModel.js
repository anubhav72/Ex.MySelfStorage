const mongoose = require("../connection");


const schema = new mongoose.Schema({
  city: String,
  address: String,
  totalSpace:String,
  price: Number,
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("locations", schema);

module.exports = model;