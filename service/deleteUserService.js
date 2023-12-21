
const deleteUserdata=require("../repository/deleteUserdata.js");

const deleteUserService=async (username)=>{
      
    await deleteUserdata(username);

}

module.exports=deleteUserService;