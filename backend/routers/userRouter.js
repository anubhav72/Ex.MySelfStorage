// importing express
const express = require("express");

const Model = require("../models/UserModel");

// create router
const router = express.Router();

router.get("/home", (req, res) => {
  console.log("a request at user home");
  res.send("you have found user Home");
});

// for firsttime login

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

router.get("/getbyid/:id", (req, res) => {
  console.log("request on getbyid");

  console.log(req.params.id);

  res.send("you have requested on /getbyid in user");
});

// router for show all data of database
router.get("/getall", (req, res) => {
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
// router for authentication 

router.post("/authenticate", (req, res) => {
  const formdata = req.body;

  Model.findOne({ email: formdata.email, password: formdata.password })
    .then((data) => {
      if (data) {
        console.log("login success");
        res.status(200).json(data);
      } else {
        console.log("login failed");
        res.status(400).json({ message: "failed" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// router for delete userid 

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((data) => {
      console.log("data deleted!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});
// router for update userid 
router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      console.log("data updated!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// for export module
module.exports = router;
