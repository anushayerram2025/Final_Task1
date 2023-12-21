
const UserModel = require('../Models/Model.js');
const fetchUserData=async (username)=>{
        const user = await UserModel.findOne({Username:username});
        if (!user){
                throw new  Error("User is not found with given username");
                
              }
              else if (user.soft_delete){
                throw new Error("USER ACCOUNT DOESN'T exists");
              }
        return user;
}
module.exports=fetchUserData;