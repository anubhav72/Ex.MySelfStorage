const mongoose = require("mongoose");

const url =
  "mongodb+srv://lucifer:milucifer@cluster0.kvzqw.mongodb.net/backend-selfstorage?retryWrites=true&w=majority";

//   this will return promise
mongoose
  .connect(url)
  .then(() => {
    console.log("connected to backend-selfstorage");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose;
