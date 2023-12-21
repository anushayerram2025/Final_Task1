
const deleteUserService=require("../service/deleteUserService.js");
const deleteUserController=async (req,res)=>{
      
        const username=req.params.username;
        await deleteUserService(username);



}
module.exports=deleteUserController;