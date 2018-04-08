const express = require('express');
const router = express.Router();
const passport = require('passport');

const middleware = require('../../middleware')
const User = require('../../models/user');

/*
 * POST ROUTE
 * CREATE -- Make new user
 */
router.post('/signup', passport.authenticate('local-signup', {
  failureRedirect : '/signup', 
}), (req, res) => {
  res.redirect('/user/' + req.user._id);
});

/*
 * POST ROUTE
 * READ -- Login user
 */
router.post('/login', passport.authenticate('local-login', {
  // successRedirect : '/', 
  failureRedirect : '/login', 
}), (req, res) => {
  console.log('successfully logged in: ', req.user);
  res.redirect('/user/' + req.user._id);
});

/*
 * GET ROUTE
 * READ -- Get login user information
 */
router.get('/user/:id', async (req, res, next) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      res.redirect('/');
    }
    res.send({ users: user });
  } catch (err) {
    next(err);
  }
});

/*
 * GET ROUTE
 * READ -- Get user credentials for updating
 */
router.get('/user/:id/edit', middleware.isLoggedIn, async (req, res, next) => {
  try {
    let user = await User.findById(req.params.id);
    res.send({ users: user });
  } catch (err) {
    next(err);
  }
});

/*
 * POST ROUTE
 * UPDATE -- Edit user credentials
 */
router.post('/user/:id/edit', middleware.isLoggedIn, async (req, res, next) => {
  try {
    let user = await User.findById(req.params.id);
    let verify = await User.findOne({ username: req.body.username });

    // Check if DB already has that username (and is not the same user)
    if (verify && user.username !== verify.username) {
      res.send({ response: 'taken' });
    } else {
      user.username = req.body.username;
      user = await user.save();
      res.send({ response: user });
    }
  } catch (err) {
    next(err);
  }
});

/*
 * DELETE ROUTE
 * DESTROY -- Delete user and associated credentials
 */
router.delete('/user/:id/delete', middleware.isLoggedIn, async (req, res, next) => {
  try {
    console.log('DELETE ROUTE PARAMS: ', req.params);
    let user = await User.findByIdAndRemove(req.params.id);
    console.log('SUCCESSFULLY DELETED USER');
    res.send({ response: 'deleted' });
  } catch (err) {
    console.log('Error trying to delete');
    res.send({ response: 'error' });
    next(err);
  }
});

/*
 * GET ROUTE
 * READ -- Logout user
 */
router.get('/logout', (req, res) => {
  console.log('successfully logged out: ', req.user.username);
  req.logout();
  res.redirect('/');
});

//For testing purposes:
router.get('/api/current_user', (req, res)=> {
  res.send(req.user); //passport attach functions to the request
});

module.exports = router;