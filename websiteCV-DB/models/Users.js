const mongoose = require('mongoose');
const Schema =mongoose.Schema;

//create schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    University:{
        type: String,
        required: true
    },
    Major:{
        type: String,
        required: true
    },
    file:{
        type: Object
    }

});

module.exports= User = mongoose.model('user', UserSchema);