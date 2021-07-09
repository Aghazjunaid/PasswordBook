const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var PasswordBookSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref:"user"},
    accountType: {type:String, required:true},
    accountName: {type: String, required: true},
    accountEmail: {type: String},
    accountPassword: {type: String, required:true},
    note: {type: String}
}, {timestamps: true});

module.exports = mongoose.model("passwordBookSchema", PasswordBookSchema)