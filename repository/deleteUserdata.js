const Model=require("../Models/Model.js");
const deleteUserdata=async (username)=>{
     const user=await Model.find({Username:username});
     user.soft_delete=true;
     return;
}

module.exports=deleteUserdata;