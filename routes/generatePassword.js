const PasswordGenerator = require("../models/passwordGenerator")
const utils = require("../utils/utils")();

module.exports = () => {
    

    async function generatePassword(req,res){
        var return_response = { "status": null, "message": null, "password": null } 
        try {
            let opt = req.body;
            let doc = await utils.passwordGenerator(opt.passwordLength,opt.uppercaseAlphabetIsActive,opt.lowercaseAlphabetIsActive,opt.specialCharacterIsActive)
            return_response.status = 200;
            return_response.message = "Success";
            return_response.password = doc;
        } catch (error) {
            return_response.status = 400;
            return_response.message = String(error);
        }
        res.json(return_response);
    }
    
    
    
    return {
        generatePassword
    }
}