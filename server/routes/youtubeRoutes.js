const express = require('express');
const router = express.Router();
const middleware = require('../middleware')
const { google } = require('googleapis');
const keys = require('../config/keys');


// ==================================
// Youtube config
// ==================================
// app.get ('../client/src/routing/AppRoutes.jsx', AppRoutes.handleSearchInput)

const API_KEY = keys.youtubeApiKey;
// console.log(API_KEY);
let term = 'top';

// router.post('/searchthis', (req, res) => {
//   req.body.
// });

router.get('/searchthis', (req, res) => {
  google.youtube({
    version: 'v3',
    auth: API_KEY
  }).search.list({
    part: 'snippet',
    q: term,
    maxResults: 9,
    topicId: '/m/04rlf'
  }, (err, data, response) => {
    if (err) {
      console.error('Error: ' + err);
    }
    if (data) {
      console.log('This is the data: ', data.data);
      res.send({ data: data.data });
    }
  });
});

module.exports = router;