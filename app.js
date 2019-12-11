const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dataBaseConfig = require('./database/db');
const profileController = require('./controller/profileController')
const Profile = require('./model/Profile');

/* Set up express js port */
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors());
app.use('/api', profileController);

/* Create port */
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

/* Find 404 and hand over to error handler */
app.use((req, res, next) => {
  next(createError(404));
});

/* error handler */
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

/* POST THE USER DATA TO MONGODB FOR THE FIRST TIME */
// var postUser = () => {
//     var profiledata = new Profile({
//         firstName: "Jane",
//         middleName: "Smith",
//         lastName: "Doe"
//     })
//     profiledata.save((err) => {
//         if(err){
//             console.log("Error in saving the data");
//             reject(err);
//         } 
//         console.log("Data saved successfully");
//         resolve({msg: "Data saved"});
//     });
// }

/* CALL POSTUSER FUNCTION */
// postUser();