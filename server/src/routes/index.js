const express = require('express');
const router = express.Router();
/* 
const {Customer} = require("../models/CustomerModel");
const {Route} = require("../models/RouteModel");
const {Bus} = require("../models/BusModel");
const {CustomerRoute} = require("../models/CustomerRouteModel");
const {Driver} = require("../models/DriverModel");
const {Stop} = require("../models/StopModel");
const {StopRoute} = require("../models/StopRouteModel"); 
const {User} = require("../models/UserModel"); */

const User = require('../models/UserModel.js');


router.get("/", (req, res) => {
  let user = new User(
    {
      CI: "12345678",
      username: "admin",
      password: "admin",
      rol: "admin"

    }
  );
  user.save();
  res.json({ res: "Dato guardado"});
});

module.exports= router;



