const express = require('express'); // use express methods
const bodyParser = require('body-parser'); // allows form data to be available in req.body
const path = require('path'); //joins path segments and normalizes resulting path
require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('passport');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const keys = require('./config/keys');
const app = express();
const PORT = process.env.PORT || 8000;

// Require routes & models
const router = require('./routes/routes');
const authRouter = require('./routes/authRoutes');
const youtubeRouter = require('./routes/youtubeRoutes');

app.use(bodyParser.urlencoded({extended: true})); // returns middleware that only parses urlencoded bodies; extended allows for the qs library
app.use(express.static(path.join(__dirname, '../client/public'))); // joins current path with client path
app.use(bodyParser.json()); // looks for JSON data
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(cors()); // cors middleware for auth

// Locally use mongoDB or use mLab setup from geckos-32
// Comment/Uncomment accordingly
const url = "mongodb://localhost:27017/geckos32";
// const url = keys.DB;
mongoose.connect(url);

// Passport Config
app.use(require('express-session')({
  secret: 'geckos32 made this',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
require('./passport/passport')(passport);

// ROUTING PATHS
app.use('/routes', router);
app.use('/routes/auth', authRouter);
app.use('/routes', youtubeRouter);

// handle all routes on index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// start app on specified port
app.listen(PORT, (err) => {
  if (err) {
    console.log('There was an error connecting to the server', err);
  }
  else { 
    console.log('You have connected to the server on PORT: ', PORT); 
  }
});

module.exports = app;