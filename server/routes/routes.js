const express = require('express');
const router = express.Router();
const passport = require('passport');
const path = require('path');

const User = require('../models/user');


// POST route to create a new user
router.post('/signup', (req, res) => {
  User.register(new User({ username : req.body.username }), req.body.password, (err, newUser) => {
    if (err) {
      console.log(err);
      res.send('AN ERROR OCURRED', err);
    }
    passport.authenticate('local')(req, res, () => {
      console.log('new user created: ', newUser);
      res.redirect('/');
    });
  });
});

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


// router.route('/update')
// .post((req, res) => {
//   const doc = {
//     username: req.body.username,
//     password: req.body.password,
//   };
//   console.log(doc);
//   user.update({_id: req.body._id}, doc, (err, result) => {
//     if (err) {
//       res.send(err);
//       res.send('User successfully updated!');
//     }
//   });
// });

// router.get('/delete', function(req, res){
//   const id = req.query.id;
//   user.find({_id: id}).remove().exec((err, user) => {
//     if(err) {
//       res.send(err)
//       res.send('User successfully deleted!');
//     }
//   })
// });

module.exports = router;