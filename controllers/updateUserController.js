const updateUser = require("../service/updateUser")

const updateUserController=async (req,res)=>{
    await updateUser(req.body);
}

module.exports=updateUserController;