const express = require('express');
const router = express.Router({mergeParams: true}); // uses params.id for user

const middleware = require('../middleware')
const User = require('../models/user');
const Video = require('../models/video');
const Playlist = require('../models/playlist');

/*
 * GET ROUTE
 * READ -- Read playlists information
 */
router.get('/', middleware.isLoggedIn, async (req, res) => {
    try {
      let user = await User.findById(req.params.id).populate({path: 'playlists', populate:{path:'videos', model: 'Video'}});
      if (!user) {
        res.redirect('/');
      } else {
        console.log('playlists ', user.playlists);
        res.send({playlists: user.playlists});
      }
    } catch (err) {
      return err;
    }
  });
  
  /*
   * POST ROUTE
   * CREATE -- Create a new playlist
   */
  router.post('/new/:playlistName', async (req, res, next) => {
    try {
      let user = await User.findById(req.params.id);
      if (!user) {
        res.redirect('/');
      } else {
        let newPlaylist = new Playlist(); 
        newPlaylist.name = req.params.playlistName; 
        newPlaylist.author.id = user._id; 
        newPlaylist.author.username = user.username;
        newPlaylist = await newPlaylist.save();
        console.log(newPlaylist);
        user.playlists.push(newPlaylist._id);
        user = await user.save();
        console.log(user.playlists);
        res.send({playlists: user.playlists});
      }
    } catch (err) {
      next(err);
    }
  });
  /*
   * POST ROUTE
   * UPDATE/CREATE?? -- Add a video to the playlist
   */
  router.post('/:playlist_id/add', async (req, res, next) => {
    try {
      let user = await User.findById(req.params.id); // is this necessary??? 
      if (!user) {
        res.redirect('/');
      } else {
        let playlist = await Playlist.findById(req.params.playlist_id);
        let newVideoInPlaylist = new Video(); 
       
        newVideoInPlaylist.title = req.body.title;
        newVideoInPlaylist.url = req.body.url;
        newVideoInPlaylist.thumbnail = req.body.thumbnail;
        newVideoInPlaylist = await newVideoInPlaylist.save();

        playlist.videos.push(newVideoInPlaylist._id);
        playlist = await playlist.save();
        
        console.log(playlist);
        res.send({ playlist: playlist });

      }
    } catch (err) {
      next(err);
    }
  });
  module.exports = router;