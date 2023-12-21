const db = require('../Models/Model.js');

const createUserdata=async (userCredentials,hashPassword)=>{
    const {name,username,phone_no:Phone,role:Role}=userCredentials;
    const user= await db.create({
        Name:name,
        Username:username,
        password:hashPassword,
        phone_no:Phone,
        role:Role
    })

}

module.exports=createUserdata;