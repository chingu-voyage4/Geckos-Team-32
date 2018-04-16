const express = require('express');
const router = express.Router({mergeParams: true}); // uses params.id for user

const middleware = require('../middleware')
const User = require('../models/user');
const Video = require('../models/video');
const Playlist = require('../models/playlist');
const mongoose = require('mongoose');

/*
 * GET ROUTE
 * READ -- Read playlists information
 */
router.get('/', middleware.isLoggedIn, async (req, res) => {
    try {
      let user = await User.findById(req.params.id)
      .populate({ path: 'playlists',
        populate: { path: 'videos'}
      });
      if (!user) {
        res.redirect('/');
      } else {
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
        user.playlists.push(newPlaylist._id);
        user = await user.save();
        res.send({playlists: user.playlists});
      }
    } catch (err) {
      next(err);
    }
  });
  /*
   * POST ROUTE
   * UPDATE/CREATE -- Add a video to the playlist
   */
  router.post('/:playlist_id/add', async (req, res, next) => {
    try {
      let user = await User.findById(req.params.id).populate('playlists'); 
      let match = await user.playlists.find(playlists => playlists._id === req.params.playlist_id);

      if(match) {
        console.log('this playlists already exists');
        res.send({playlists: user.playlists});
      }

      if (!user) {
        res.redirect('/');
      } 
      
      else {
        let playlist = await Playlist.findById(req.params.playlist_id);
        
        let matchVideo = await playlist.videos.find(video => video.url === req.body.url);

        if (matchVideo) {
          console.log('this video already exists in this playlist');
          res.send({playlists: user.playlists});
        }

        else {
        let newVideoInPlaylist = new Video(); 
       
        newVideoInPlaylist.title = req.body.title;
        newVideoInPlaylist.url = req.body.url;
        newVideoInPlaylist.thumbnail = req.body.thumbnail;
        newVideoInPlaylist = await newVideoInPlaylist.save();

        playlist.videos.push(newVideoInPlaylist._id);
        playlist = await playlist.save();
        
        res.send({ playlist: playlist });
        }
      }
    } catch (err) {
      next(err);
    }
  });

  /*
   * POST ROUTE
   * UPDATE - DELETE -- Delete a video from the playlist
   */
  router.post('/:playlist_id/video/delete', async (req, res, next) => {
    try {
      let user = await User.findById(req.params.id); 
      if (!user) {
        res.redirect('/');
      } 
      
      else {
        let playlists_id = req.params.playlist_id;
        let video_id = req.body.id;

        let video = await Video.findByIdAndRemove(video_id);
        let playlist = await Playlist.findById(playlist_id);
        playlist.video.pull(video_id);
        res.send({playlists: user.playlists});
      }
    } catch (err) {
      next(err);
    }
  });

   /*
   * POST ROUTE
   * DELETE -- Delete a playlist
   */

  router.post('/:playlist_id/delete', async (req, res, next) => {
    try {
      let user = await User.findById(req.params.id); 
      if (!user) {
        res.redirect('/');
      } 
      
      else {
        let id = req.params.playlist_id;
        let playlist = await Playlist.findByIdAndRemove(id);
        user.playlists.pull(id);
        res.send({playlists: user.playlists});
      }
    } catch (err) {
      next(err);
    }
  });


  module.exports = router;