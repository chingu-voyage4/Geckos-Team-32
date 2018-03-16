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
  }, async (req, username, password, done) => {
    try {
      let user = await User.findOne({ username: username });
        if (user) { 
          return done(null, false); // Username already taken
        } else {
          let newUser = new User();
          newUser.username = username;
          newUser.password = newUser.generateHash(password);
          newUser = await newUser.save();
          console.log('new user created: ', newUser);  
          return done(null, newUser);  
        }
    } catch (err) {
      return done(err);
    }
  }));

  // Local Login Config
  passport.use('local-login', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true 
  }, async (req, username, password, done) => { 
    try {
      let user = await User.findOne({ username: username });
      if (!user || !user.validPassword(password)) {
        return done(null, false);
      } else {
        console.log('LOGGED IN USER: ', user);
        return done(null, user);
      }
    } catch (err) {
      return done(err);
    }
  }));

  // OAuth Google Config
  passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL:'/routes/auth/google/callback', //route the user is going to be send to after he/she authenticate
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ googleID: profile.id });
      if (!user) {
        let newUser = new User();
        newUser.googleID = profile.id;
        newUser.username = profile.displayName;
        newUser.email = profile.emails[0].value;
        newUser = await newUser.save();
        console.log('new google user created: ', newUser);  
        return done(null, newUser);  
      } else {
        console.log('LOGGED IN GOOGLE ACCOUNT: ', user);
        return done(null, user);
      }
    } catch (err) {
      return done(err, null);
    }
  }));

  // Facebook Config
  passport.use(new FacebookStrategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookClientSecret,
    callbackURL: '/routes/auth/facebook/callback'
  }, async (token, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ facebookID: profile.id });
      if (!user) {
        let newUser = new User();
        newUser.facebookID = profile.id;
        newUser.facebookToken = token;
        newUser.username = `${profile.name.givenName} ${profile.name.familyName}`;
        newUser = await newUser.save();
        console.log('new facebook user created: ', newUser);  
        return done(null, newUser); 
      } else {
        console.log('LOGGED IN FACEBOOK ACCOUNT: ', user);
        return done(null, user);
      }
    } catch (err) {
      return done(err, null);
    }
  }));
};


/////////////////////////////////////////////////
// OLD PASSPORT FACEBOOK CODE
/////////////////////////////////////////////////

// passport.use(new FacebookStrategy({
//   // pull in our app id and secret from our auth.js file
//   clientID: keys.facebookClientID,
//   clientSecret: keys.facebookClientSecret,
//   callbackURL: '/routes/auth/facebook/callback'
// }, (token, refreshToken, profile, done) => {
//   process.nextTick(() => {
//     User.findOne({ 'facebook.id': profile.id }, (err, user) => {
//       if (err)
//         return done(err);
//       if (user) {
//         return done(null, user); 
//       } else {
//         let newUser = new User();
//         // set all of the facebook information in our user model
//         newUser.facebookID = profile.id;                  
//         newUser.facebookToken = token;                  
//         newUser.displayName = profile.name.givenName + ' ' + profile.name.familyName; 
//         // save our user 
//         newUser.save((err) => {
//           if (err)
//             throw err;
//           return done(null, newUser);
//         });
//       }
//     });
//   });
// }));