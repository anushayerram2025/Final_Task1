const getUsers = require("../service/getUsers");


const getUsersController= async (req,res)=>{
    const username=req.user.username;
    const users=await getUsers(username);
    res.send(users);

}

module.exports=getUsersController;