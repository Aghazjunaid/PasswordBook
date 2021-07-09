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

    //================post catrgory============================
//This api will add category into the database
async function addCategory(req,res){
    var return_response = { "status": null, "message": null, "data": {} } 
    try {
        let opt = req.body;
        const category = new Category(opt);
        const doc = await category.save();
        return_response.status = 200;
        return_response.message = "Category added successfully";
        return_response.data = doc;
    } catch (error) {
        return_response.status = 400;
        return_response.message = String(error);
    }
    res.json(return_response);
}

//=============get all catgory=================================
//This api will get all the test score of candidate
async function getCategory(req,res){
    var return_response = { "status": null, "message": null, "data": null } 
    try {
        const doc = await Category.find({})
        return_response.status = 200;
        return_response.message = "Success";
        return_response.data = doc;
    } catch (error) {
        return_response.status = 400;
        return_response.message = String(error);
    }
    res.json(return_response);
}

//============delete category========================================
async function deleteCcategory(req,res){
var return_response = { "status": null, "message": null, "data": {} } 
try {
    const doc = await Category.findByIdAndDelete({_id:req.params.id})
    return_response.status = 200;
    return_response.message = "Category deleted successfully";
    return_response.data = doc;
} catch (error) {
    return_response.status = 400;
    return_response.message = String(error);
}
res.json(return_response);
}

    
    return {
        getUser
    }
}