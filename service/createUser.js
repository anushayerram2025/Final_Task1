
var express = require('express');
var router = express.Router();
const db = require('../Models/Model.js');
const bcrypt = require("bcrypt")
const authenticateToken=require('../auth/auth.js');
const fetchProfile=require('../auth/details.js');
const createUserdata=require('../repository/createUserdata.js');

function createHashpass(password){
  const saltRounds=10;
  const hash=bcrypt.hash(password,saltRounds)
  return hash;
}

const createUser=async function(userCredentials){
    const {password}=userCredentials;
    const hash=String( await createHashpass(password));
    await createUserdata(userCredentials,hash)
              
}

module.exports=createUser;