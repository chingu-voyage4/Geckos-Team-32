const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
  title: String,
  thumbnail: String,
  url: String,
  playlist: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Playlist'
    }
  }
});

module.exports = mongoose.model('Video', videoSchema);