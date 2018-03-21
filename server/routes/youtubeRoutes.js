const express = require('express');
const router = express.Router();
const { google } = require('googleapis');
const keys = require('../config/keys');


/*
 * YouTube Routes
 * GET ROUTE -- Get search query from frontend search input
 * READ -- Return top 9 results related to search query
 */

const API_KEY = keys.youtubeApiKey;
// console.log(API_KEY);

router.get('/search/:query', (req, res) => {
  // console.log('this is params:', req.params.query);
  let query = req.params.query;
  google.youtube({
    version: 'v3',
    auth: API_KEY
  }).search.list({
    part: 'snippet',
    q: query,
    maxResults: 9,
    topicId: '/m/04rlf'
  }, (err, data, response) => {
    if (err) {
      console.error('Error: ' + err);
    }
    if (data) {
      // console.log('This is the data: ', data.data);
      res.send({ data: data.data });
    }
  });
});


module.exports = router;