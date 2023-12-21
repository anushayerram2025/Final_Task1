const updateUserdata = require("../repository/updateUserdata.js");

const updateUser=async (newData)=>{

      await updateUserdata(newData);
}

module.exports=updateUser;