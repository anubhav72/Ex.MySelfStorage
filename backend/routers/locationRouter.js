// importing express
const express = require("express");

const Model = require("../models/locationModel");
const router = express.Router();

router.post("/add", (req, res) => {
    console.log(req.body);
  
    new Model(req.body)
      .save()
      .then((data) => {
        console.log("data saved");
        res.status(200).json({ message: "success" });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  });

  router.get("/admin/getall", (req, res) => {
    Model.find({})
      .then((data) => {
        console.log("data saved");
        res.status(200).json(data);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;