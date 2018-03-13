const express = require('express');
const router = express.Router();
const passport = require('passport');
const path = require('path');

const middleware = require('../middleware')
const User = require('../models/user');

/*
 * GET ROUTE
 * READ -- Login user via Google authentication
 */
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
  })
);

/*
 * GET ROUTE
 * READ -- Callback Google authentication
 */
router.get('/google/callback', passport.authenticate('google', {
  successRedirect : '/',
  failureRedirect : '/signup'
}));

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
  successRedirect : '/',
  failureRedirect : '/signup'
}));

module.exports = router;