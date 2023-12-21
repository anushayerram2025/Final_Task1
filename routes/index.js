var express = require('express');
const authenticateToken=require('../auth/auth.js');
var router=express.Router();
const fetchProfile=require('../auth/details.js');
const loginUserController=require("../controllers/loginUserController");
const userProfileController = require('../controllers/userProfileController');



router.post('/login',loginUserController);
router.get('/profiles/:username',authenticateToken,fetchProfile,userProfileController);


module.exports = router;



/*
/login==> home page (if doesnot have account then /register..if forgot password then '/forgotpass)
/register==> redirect to /login (home)
/forgot ==> forgot password==> will update()
#user details
These are POST ROUTES
/deleteUser(soft delete)
/getAllUsers
/UpdateUser..but on what based? 

*/