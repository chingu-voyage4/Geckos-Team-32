const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfilePicSchema = new Schema ({
    gechoID:{type: Number,
            unique:true}, 
    isfromSN:Boolean,
    src:String
});

module.exports= mongoose.model('ProfilePic', ProfilePicSchema);