const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var PasswordGeneratorSchema = new Schema({
    password: {type: String},
    passwordLength: {type: Number},
    uppercaseAlphabetIsActive: {type: Boolean},
    lowercaseAlphabetIsActive: {type: Boolean},
    specialCharacterIsActive: {type: Boolean},
}, {timestamps: true});

module.exports = mongoose.model("passwordGenerator", PasswordGeneratorSchema)