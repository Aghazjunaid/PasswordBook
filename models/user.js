const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    mobile: {type: Number},
    password: {type: String, required:true}
}, {timestamps: true});

module.exports = mongoose.model("user", UserSchema)