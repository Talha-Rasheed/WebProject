const express = require("express");
const router = express.Router();
const copy = require("../models/userModel");

router.post("/SignUp", (request, response) => {
  const signedUpUser = new copy({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    password: request.body.password,
  });
  signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

router.delete("/User/:id", (request, response) => {
  copy
    .deleteOne({ _id: request.params.id })
    .then((result) => {
      response.status(200).json(result);
    })
    .catch((error) => console.log(error));
});

router.get("/user/:id", function (req, res) {
  copy
    .findById(req.params.id)
    .then((data) => {
      console.log("Data by ID Fetched");
      res.json(data);
    })
    .catch((error) => console.log(error));
});

router.put("/UpdateUser/:id", async (request, response) => {
  const { name, registrationNumber } = request.body;

  const update = await copy
    .findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          firstName: request.body.firstName,
          lastName: request.body.lastName,
          email: request.body.email,
          password: request.body.password,
        },
      },
      { new: true }
    )
    .then((data) => {
      console.log("Data Saved");
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

router.put("User/:id", (request, response) => {
  copy
    .updateOne(
      { _id: request.params.id },
      {
        $set: {
          firstName: request.body.firstName,
          lastName: request.body.lastName,
          email: request.body.email,
          password: request.body.password,
        },
      }
    )
    .then((result) => {
      result.status(201).json(result);
    })
    .catch((error) => console.log(error));
});

router.get("/users", function (req, res) {
  copy
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
