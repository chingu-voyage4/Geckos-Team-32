// All middleware functions
const Playlist = require('../models/playlist');
const Video = require('../models/video');

const middlewareObj = {};

/*
 * Playlist middleware
 * Check that user is logged in first, otherwise redirect
 * If logged in, check that playlist belongs to logged in user
 */
middlewareObj.checkPlaylistOwner = (req,res,next) => {
  if (req.isAuthenticated()) {
    Playlist.findById(req.params.id, (err, foundPlaylist) => {
      // Check that there's no valid ID OR if DB returns null
      if (err || !foundPlaylist) {
        console.log('An error occurred while checking for the playlist: ', err);
        res.redirect('back');
      } else {
        // Check if user owns playlist
        if (foundPlaylist.author.id.equals(req.user._id)) {
          next();
        } else {
          // Playlist belongs to a different user
          // Use flash errors for error handling in the future??
          console.log('Permission Denied');
          res.redirect('back');
        }
      }
    });
  } else {
    // User not logged in
    console.log('Login first');
    res.redirect('back');
  }
}

/*
 * User middleware
 * Check that user is logged in first, otherwise redirect
 */
middlewareObj.isLoggedIn = (req,res,next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/routes/login');
}

module.exports = middlewareObj;