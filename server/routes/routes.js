const express = require('express');
const router = express.Router();
const passport = require('passport');
const path = require('path');

const middleware = require('../middleware')
const User = require('../models/user');

/*
 * POST ROUTE
 * CREATE -- Make new user
 */
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/', 
  failureRedirect : '/signup'
}));

/*
 * POST ROUTE
 * READ -- Login user
 */
router.post('/login', passport.authenticate('local-login', {
  // successRedirect : '/', 
  failureRedirect : '/login', 
}), (req, res) => {
  console.log('successfully logged in: ', req.user);
  res.redirect('/users/' + req.user._id);
});

/*
 * GET ROUTE
 * READ -- Get login user information
 */
router.get('/user/:id', (req, res) => {
  User.findById(req.params.id).exec((err, foundUser) => {
    if (err || !foundUser) {
      console.log('There was a problem: ', err);
      res.redirect('/');
    } else {
      res.send({ users: foundUser });
    }
  });
});

/*
 * GET ROUTE
 * READ -- Get user credentials for updating
 */
router.get('/user/:id/edit', middleware.isLoggedIn, (req,res) => {
  User.findById(req.params.id, (err, foundUser) => {
    res.send({ users: foundUser });
  });
});

/*
 * PUT ROUTE
 * UPDATE -- Edit user credentials
 */
router.put('/user/:id', middleware.isLoggedIn, (req,res) => {
  // Input fields need to be wrapped, ex: name="user[username]"
  User.findByIdAndUpdate(req.params.id, req.body.user, (err, updatedUser) => {
    if (err) {
      res.redirect('/');
    } else {
      console.log('Successfully updated user: ', updatedUser);
      res.redirect('/users/' + req.params.id);
    }
  });
});

/*
 * DELETE ROUTE
 * DESTROY -- Delete user and associated credentials
 */
router.delete('/user/:id', middleware.isLoggedIn, (req,res) => {
  User.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      console.log('There was an error: ', err);
      res.redirect('/');
    } else {
      console.log('Successfully deleted user account');
      res.redirect('/');
    }
  });
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