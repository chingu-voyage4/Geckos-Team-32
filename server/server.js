const express = require('express'); // use express methods
const bodyParser = require('body-parser'); // allows form data to be available in req.body
const path = require('path'); //joins path segments and normalizes resulting path
require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('passport');
var morgan = require('morgan');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const cookieParser = require('cookie-parser');
const cors = require('cors');

const keys = require('./config/keys');


const app = express();

// Require routes & models
//require('./routes/authroutes')(app); //calls the function we are importing
const router = require('./routes/routes')
const User = require('./models/user');


const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true})); // returns middleware that only parses urlencoded bodies; extended allows for the qs library
app.use(express.static(path.join(__dirname, '../client/public'))); // joins current path with client path
app.use(bodyParser.json()); // looks for JSON data
app.use(cookieParser());
app.use(cors());


// Locally use mongoDB or use mLab setup from geckos-32
// const url = process.env.MONGODB_URI || "mongodb://localhost:27017/geckos32"
const url = keys.DB;
mongoose.connect(url);

// Passport Config
app.use(require('express-session')({
  secret: 'geckos32 made this',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

//Local Config

passport.use('local-signup', new LocalStrategy({
  usernameField : 'username',
  passwordField : 'password',
  passReqToCallback : true 
},
function(req, username, password, done) {

  process.nextTick(function() {
  User.findOne({ 'username' :  username}, function(err, user) {
      if (err)
          return done(err);

      if (user) {
          return done(null, false);
      } 
      
      else {
          var newUser = new User();

          newUser.username = username;
          newUser.password = newUser.generateHash(password);

          newUser.save(function(err) {
              if (err)
                  throw err;
              return done(null, newUser);
          });
          console.log('new user created: ', newUser);
      }
  });    
  });
}));



//OAuth Google Config
passport.use(
  new GoogleStrategy(
      {
          clientID: keys.googleClientID,
          clientSecret: keys.googleClientSecret,
          callbackURL:'/routes/auth/google/callback', //route the user is going to be send to after he/she authenticate
      }, 
      
      (accessToken, refreshToken, profile, done) => {
          //console.log('profile:', profile);
          User.findOne({googleID:profile.id}) 
          .then( (existingUser)=> {                   
              if(existingUser) {
                  done(null, existingUser);                
              } 
              
              else {
                  new User ( {googleID: profile.id}).save() 
                  .then(user => done (null, user));
              }
          })   
      }
  )
);


passport.serializeUser ( (user, done) => { 
  done(null, user.id); 
});

passport.deserializeUser ((id, done) => {
  User.findById(id)
      .then(user => {
          done(null, user);
      });
});

app.use('/routes', router);

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