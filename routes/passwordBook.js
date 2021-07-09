const PasswordBook = require("../models/passwordBook");


module.exports = () => {

    //================Add Password=======================================================
    async function addPassword(req,res){
        var return_response = { "status": null, "message": null, "data": {} } 
        try {
            let opt = req.body;
            //opt.user = req.user.id;
            const passwordBook = new PasswordBook(opt);
            const doc = await passwordBook.save();
            return_response.status = 200;
            return_response.message = "Password added successfully";
            return_response.data = doc;
        } catch (error) {
            return_response.status = 400;
            return_response.message = String(error);
        }
        res.json(return_response);
    }


    return {
        addPassword
    }

}