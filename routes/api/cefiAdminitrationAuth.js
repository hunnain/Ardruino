const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const keys = require('../../config/keys');
// Cefi Administrators Schema
const apiHit = require('../../models/CefiAdministrative');

//Initialize Router in router variable
const router = express.Router();




//REGISTER ROUTE
// Adminsitartor Registration
router.get('/', (req, res) => {
  const userId = req.body.userId;
  const newCefiAdministrator = new apiHit({
     date: new Date()
  })

          // Store Data in Database
          newCefiAdministrator.save().then((data) => {

            return res.status(200).json({
              data: data,
              success: true,
              status: "Added"
            });
          }).catch((err) => {
            return res.status(200).json({
              data: data,
              success: false,
              status: "Sorry There is an INternal Server Error Contact System Admin"
            });
          })
});

module.exports = router;