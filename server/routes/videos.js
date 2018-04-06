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
      res.send({ videos: user.videos });
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
    let user = await User.findById(req.params.id);
    if (!user) {
      res.redirect('/');
    } else {
      let newVideo = new Video();
      newVideo.title = req.body.title;
      newVideo.url = req.body.url;
      newVideo.thumbnail = req.body.thumbnail;
      newVideo = await newVideo.save();
      user.videos.push(newVideo._id);
      user = await user.save();
      // console.log('udpated user: ', user);
      res.send({ videos: user.videos });
    }
  } catch (err) {
    next(err);
  }
});

/*
 * DELETE ROUTE
 * DESTROY -- Delete video from user's saved/liked videos list
 */
router.get('/delete/:video_id', middleware.isLoggedIn, async (req, res, next) => {
  let video_id = req.params.video_id;
  try {
    console.log(req.params);
    let user = await User.findById(req.params.id).populate('videos');
    let video = await Video.findByIdAndRemove(req.params.video_id);
    console.log('SUCCESSFULLY DELETED VIDEO FROM SAVED LIST');
    res.send({ videos: user.videos });  
  } catch (err) {
    console.log('Error trying to delete');
    res.send({ response: 'error' });
    next(err);
  }
});

module.exports = router;