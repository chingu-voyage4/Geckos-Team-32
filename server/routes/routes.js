const express = require('express');
const router = express.Router();
const passport = require('passport');
const path = require('path');

const User = require('../models/user');

// POST route to create a new user
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/', 
  failureRedirect : '/signup'
}));


// POST route to login user
router.post('/login', passport.authenticate('local', {
  // successRedirect: '/',
  failureRedirect: '/login',
}), (req, res) => {
  console.log('successfully logged in: ', req.user);
  res.redirect('/');
});

// LOGOUT route
router.get('/logout', (req, res) => {
  console.log('successfully logged out: ', req.user.username);
  req.logout();
  res.redirect('/');
});


router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'] //communicates with Google server what access we want to have
  })
);

router.get('/auth/google/callback', passport.authenticate('google'));

//For testing purposes:

router.get('/api/current_user', (req, res)=> {
  res.send(req.user); //passport attach functions to the request
});


module.exports = router;