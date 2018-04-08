const express = require('express');
const router = express.Router();
const passport = require('passport');

/*
 * GET ROUTE
 * READ -- Login user via Google authentication
 */
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

/*
 * GET ROUTE
 * READ -- Callback Google authentication
 */
router.get('/google/callback', passport.authenticate('google', {
  failureRedirect : '/signup'
}), (req, res) => {
  console.log('successfully logged in through google: ', req.user);
  res.redirect('/user/' + req.user._id);
});

/*
 * GET ROUTE
 * READ -- Login user via Facebook authentication
 */
router.get('/facebook', passport.authenticate('facebook', { 
  scope : ['public_profile', 'email']
}));

/*
 * GET ROUTE
 * READ -- Callback for Facebook authentication
 */
router.get('/facebook/callback', passport.authenticate('facebook', {
  failureRedirect : '/signup'
}), (req, res) => {
  console.log('successfully logged in through facebook: ', req.user);
  res.redirect('/user/' + req.user._id);
});

module.exports = router;