const Model=require("../Models/Model.js");

const getUserdata=async()=>{
    const users=await Model.find({});
    return users;
}


module.exports=getUserdata;