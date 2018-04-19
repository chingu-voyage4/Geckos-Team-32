const express = require('express');
const router = express.Router({mergeParams: true}); // uses params.id for user

const middleware = require('../middleware')
const User = require('../models/user');
const Video = require('../models/video');

/*
 * GET ROUTE
 * READ -- Get video information
 */
router.get('/', middleware.isLoggedIn, async (req, res) => {
  try {
    let user = await User.findById(req.params.id).populate('videos');
    if (!user) {
      res.redirect('/');
    } else {
      // console.log('sending video data: ', user.videos);
      res.send(user.videos);
    }
  } catch (err) {
    return err;
  }
});

/*
 * POST ROUTE
 * CREATE -- Add video to saved/liked list
 */
router.post('/', async (req, res, next) => {
  try {
    let user = await User.findById(req.params.id).populate('videos'); // find user in DB
    let match = await user.videos.find(video => video.url === req.body.url); // search through user's video list

    if (match) {
      // video already exists, return list
      console.log('This video already exists in list');
      res.send({ videos: user.videos });
    } else {
      // video not in list, add it
      let newVideo = new Video();
      newVideo.title = req.body.title;
      newVideo.url = req.body.url;
      newVideo.thumbnail = req.body.thumbnail;
      newVideo = await newVideo.save();
      user.videos.push(newVideo._id);
      user = await user.save();
      // console.log('udpated user: ', user);
      res.send(user.videos);
    }
  } catch (err) {
    next(err);
  }
});

/*
 * DELETE ROUTE
 * DESTROY -- Delete video from user's saved/liked videos list
 */
router.delete('/delete/:video_id', middleware.isLoggedIn, async (req, res, next) => {
  let video_id = req.params.video_id; // get specific video id
  try {
    let video = await Video.findByIdAndRemove(req.params.video_id);
    let userArr = await User.findById(req.params.id); // get array of saved videos
    userArr.videos.pull(video_id); // remove video object from user video array
    userArr = await userArr.save();
    let user = await User.findById(req.params.id).populate('videos'); // get updated list of saved videos
    res.send(user.videos); // send list of saved videos
  } catch (err) {
    console.log('Error trying to delete');
    next(err);
  }
});

module.exports = router;