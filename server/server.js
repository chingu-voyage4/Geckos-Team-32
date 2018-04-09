require('dotenv').config();

const express = require('express'); // use express methods
const bodyParser = require('body-parser'); // allows form data to be available in req.body
const path = require('path'); //joins path segments and normalizes resulting path
const mongoose = require('mongoose');
const passport = require('passport');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const cors = require('cors');

const keys = require('./config/keys'); // access config keys/sensitive info
const PORT = process.env.PORT || 8000; // set PORT number
const router = require('./routes'); // connect all routing
const url = "mongodb://localhost:27017/geckos32"; // local mongoDB
//const url = keys.DB; // mLabs mongoDB

const app = express();

app.use(bodyParser.urlencoded({extended: true})); // returns middleware that only parses urlencoded bodies; extended allows for the qs library
app.use(express.static(path.join(__dirname, '../client/public'))); // joins current path with client path
app.use(bodyParser.json()); // looks for JSON data
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(cors()); // cors middleware for auth

/*
 * MONGO DB SETUP
 * Test locally using 'mongodb://localhost:27017/geckos32'
 * Setup mLabs using keys.DB
 * Comment/Uncomment accordingly
 */
mongoose.connect(url);

// Passport Config
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());
require('./passport/passport')(passport);

// Require routes
app.use('/routes', router);

// Handle all routes on index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Start app on specified port
app.listen(PORT, (err) => {
  if (err) {
    console.log('There was an error connecting to the server', err);
  }
  else { 
    console.log('You have connected to the server on PORT: ', PORT); 
  }
});

module.exports = app;