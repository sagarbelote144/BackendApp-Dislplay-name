const express = require('express');
const mongoose = require('mongoose');

// Connecting mongoDB
mongoose.Promise = global.Promise;
let db = mongoose.connect('mongodb://localhost:27017/profile', {
  useNewUrlParser: true
  }).then(() => {
    console.log('Database connected sucessfully ')
  },
  error => {
    console.log('Could not connected to database : ' + error)
  }
)

module.exports = db;