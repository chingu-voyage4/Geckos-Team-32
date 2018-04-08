
const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  name: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  },
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video"
    }
  ]
});

module.exports = mongoose.model('Playlist', playlistSchema);