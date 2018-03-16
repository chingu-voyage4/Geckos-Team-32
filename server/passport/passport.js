const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = require('../models/user');

module.exports = (passport) => {

  passport.serializeUser ( (user, done) => { 
    done(null, user.id); 
  });
  
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(null, user);
    });
  });

  // Local Signup Config
  passport.use('local-signup', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true 
  }, (req, username, password, done) => {
    process.nextTick(() => {
      User.findOne({ 'username': username }, (err, user) => {
        if (err)
          return done(err);
        if (user) {
          return done(null, false);
        } else {
          let newUser = new User();
          newUser.username = username;
          newUser.password = newUser.generateHash(password);
          newUser.save((err) => {
            if (err)
                throw err;
            return done(null, newUser);
          });
          console.log('new user created: ', newUser);
        }
      });    
    });
  }));

  // Local Login Config
  passport.use('local-login', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true 
  }, (req, username, password, done) => { 
    console.log('LOGIN REQ INFO: ', username, password);
    User.findOne({ 'username': username}, (err, user) => {
      if (err)
        return done(err);
      if (!user)
        return done(null, false); 
      if (!user.validPassword(password))
        return done(null, false);
      console.log(user);
      return done(null, user);
    });
  }));

  // OAuth Google Config
  passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL:'/routes/auth/google/callback', //route the user is going to be send to after he/she authenticate
  }, (accessToken, refreshToken, profile, done) => {
    //console.log('profile:', profile);
    User.findOne({ googleID: profile.id }) 
    .then((existingUser) => {                   
      if (existingUser) {
        done(null, existingUser);                
      } 
      else {
        new User ( {googleID: profile.id}).save() 
        .then(user => done (null, user));
      }
    })   
  }));

  // Facebook Config
  passport.use(new FacebookStrategy({
    // pull in our app id and secret from our auth.js file
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookClientSecret,
    callbackURL: '/routes/auth/facebook/callback'
  }, (token, refreshToken, profile, done) => {
    process.nextTick(() => {
      User.findOne({ 'facebook.id': profile.id }, (err, user) => {
        if (err)
          return done(err);
        if (user) {
          return done(null, user); 
        } else {
          let newUser = new User();
          // set all of the facebook information in our user model
          newUser.facebookID = profile.id;                  
          newUser.facebookToken = token;                  
          newUser.displayName = profile.name.givenName + ' ' + profile.name.familyName; 
          // save our user 
          newUser.save((err) => {
            if (err)
              throw err;
            return done(null, newUser);
          });
        }
      });
    });
  }));

};