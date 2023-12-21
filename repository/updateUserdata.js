const Model=require("../Models/Model");

async function updateUserdata(newData){
   const pass=String(await createHashpass(newData.password))
   const user= await Model.findOneAndUpdate({Username:newData.username},{Name:newData.name,password:pass,phone_no:newData.phone,role:newData.role});

}

module.exports=updateUserdata;