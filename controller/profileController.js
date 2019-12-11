const express = require('express');
const app = express();
const profile = express.Router();
const Profile = require('../model/Profile');

/* GET FIRSTNAME FROM THE DATABASE */
profile.route('/firstName').get((req, res) => {
    Profile.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data[0].firstName)
      }
    });
  })

/* GET MIDDLENAME FROM THE DATABASE */
profile.route('/middleName').get((req, res) => {
    Profile.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data[0].middleName)
      }
    })
  })

/* GET LASTNAME FROM THE DATABASE */
profile.route('/lastName').get((req, res) => {
    Profile.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data[0].lastName)
      }
    })
  })

module.exports = profile;