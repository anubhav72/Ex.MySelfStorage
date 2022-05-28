const mongoose = require("../connection");

const schema = new mongoose.Schema({
  location: { type: mongoose.Types.ObjectId, ref: "locations" },
  user: { type: mongoose.Types.ObjectId, ref: "users" },
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("booking", schema);

module.exports = model;
