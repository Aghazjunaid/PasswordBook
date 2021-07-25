const PasswordBook = require("../models/passwordBook");


module.exports = () => {

    //================Add Password=======================================================
    async function addPassword(req,res){
        var return_response = { "status": null, "message": null, "data": {} } 
        try {
            let opt = req.body;
            opt.user = req.user.id;
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

    //====================Get Password===================================================
    async function getPassword(req,res){
        var return_response = { "status": null, "message": null, "data": {} } 
        try {
            const doc = await PasswordBook.find({user:req.user.id});
            return_response.status = 200;
            return_response.message = "Success";
            return_response.data = doc;
        } catch (error) {
            return_response.status = 400;
            return_response.message = String(error);
        }
        res.json(return_response);
    }

        //====================Get Password By Id==================================================
        async function getPasswordById(req,res){
            var return_response = { "status": null, "message": null, "data": {} } 
            try {
                const doc = await PasswordBook.find({_id:req.params.id});
                return_response.status = 200;
                return_response.message = "Success";
                return_response.data = doc;
            } catch (error) {
                return_response.status = 400;
                return_response.message = String(error);
            }
            res.json(return_response);
        }
    

    //====================delete Password===============================================
    async function deletePassword(req,res){
        return_response = { "status": null, "message": null, "data": {} } 
       try {
           const doc = await PasswordBook.findByIdAndDelete({_id:req.params.id})
           return_response.status = 200;
           return_response.message = "Password deleted successfully";
           return_response.data = doc;
       } catch (error) {
           return_response.status = 400;
           return_response.message = String(error);
       }
       res.json(return_response);
   }

   //==============Update Password ======================================================
   async function updatePassword(req,res){
    return_response = { "status": null, "message": null, "data": {} } 
   try {
        var opt = req.body;
        const doc = await PasswordBook.findOneAndUpdate({_id:req.params.id}, opt, {new:true})
        return_response.status = 200;
        return_response.message = "Password updated successfully";
        return_response.data = doc;
    } catch (error) {
        return_response.status = 400;
        return_response.message = String(error);
    }
    res.json(return_response);
}




    return {
        addPassword,
        getPassword,
        getPasswordById,
        deletePassword,
        updatePassword
    }

}