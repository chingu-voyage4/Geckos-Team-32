const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfilePicSchema = new Schema ({
    choice:Number,
    isfromSN:Boolean,
    src:String
});

module.exports= mongoose.model('ProfilePic', ProfilePicSchema);