const fetchUserData = require("../repository/fetchUserData");
const getUserdata = require("../repository/getUsersdata");


const getUsers=async(username)=>{
    const user=await fetchUserData(username);
    if (user.role=="Admin"){
        const users=await getUserdata();
        return users;
    }
    else{
        throw  new Error("Unauthorised"); 
    }
    
}

module.exports=getUsers