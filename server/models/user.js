const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;


const User = new Schema({
  username: String,
  password: String,
  profilePic:{
    type: Schema.Types.ObjectId, 
    ref: 'ProfilePic'
    },
  googleID: String,
  facebookID: String,
  facebookToken: String,
  displayName: String,
  email: String,
  location: String,
  theme: String,
  img: String,
  videos:[{
    type: Schema.Types.ObjectId,
    ref:'Video'
  }],
  playlists:[{
    type: Schema.Types.ObjectId,
    ref:'Playlist'
  }]
});

//========= virtual types ============

//for keeping a counter of liked videos and stored playlists

User.virtual('videosCount').get(function(){ //keep the function, don't refactor to an arrow function here
    return this.videos.lenght; 
});

User.virtual('playlistsCount').get(function(){
    return this.playlists.lenght; 
});

// =============== methods ======================

// generating a hash 
User.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', User);

