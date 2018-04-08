const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
  title: String,
  thumbnail: String,
  url: String,
});

module.exports = mongoose.model('Video', videoSchema);