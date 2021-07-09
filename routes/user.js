const User = require("../models/user")

module.exports = () => {
    

    async function getUser(req,res){
        User.find({}, function(error,doc){
            if(error){
                res.send(String(error))
            }
            res.send(doc)
        })
    }
    
    return {
        getUser
    }
}