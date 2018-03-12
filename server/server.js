const express = require('express'); // use express methods
const bodyParser = require('body-parser'); // allows form data to be available in req.body
const path = require('path'); //joins path segments and normalizes resulting path
require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('passport');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { google } = require('googleapis');
const keys = require('./config/keys');

const app = express();

// Require routes & models
//require('./routes/authroutes')(app); //calls the function we are importing
const router = require('./routes/routes');
const youtubeRoutes = require('./routes/youtubeRoute');
const User = require('./models/user');
const Playlist = require('./models/playlist');
const Video = require('./models/video');

const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true})); // returns middleware that only parses urlencoded bodies; extended allows for the qs library
app.use(express.static(path.join(__dirname, '../client/public'))); // joins current path with client path
app.use(bodyParser.json()); // looks for JSON data
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(cors()); // cors middleware for auth


// Locally use mongoDB or use mLab setup from geckos-32
// const url = process.env.MONGODB_URI || "mongodb://localhost:27017/geckos32"
// const url = keys.DB;
const url = "mongodb://localhost:27017/geckos32";
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


// MIDDLEWARE
// Calls on every route (DRY)
app.use((req,res,next) => {
  res.locals.currentUser = req.user;
  next();
});

// ROUTING PATHS
app.use('/routes', router);
app.use('/routes', youtubeRoutes);

//router(app);
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