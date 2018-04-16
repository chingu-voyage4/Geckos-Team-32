
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

//////// Virtual Types

playlistSchema.virtual('videosCount').get(function(){ //keep the function, don't refactor to an arrow function here
    return this.videos.lenght; 
});

module.exports = mongoose.model('Playlist', playlistSchema);