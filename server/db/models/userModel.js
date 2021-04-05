const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    email: {type:String, require:true},
    pwd: {type:String, require:true}
})

module.exports = model('User', UserSchema);