var express = require('express');
var router = express.Router();

const authenticateToken=require('../auth/auth.js');
const fetchProfile=require('../auth/details.js');
const createUserController = require('../controllers/createUserController');
const deleteUserController = require('../controllers/deleteUserController.js');
const updateUserController = require('../controllers/updateUserController.js');
const getUsersController = require('../controllers/getUsersController.js');



/* GET users listing. */
router.get('/:username',authenticateToken,fetchProfile,getUsersController);
   
router.delete('/:username',authenticateToken,fetchProfile,deleteUserController);

router.patch('/:username',authenticateToken,fetchProfile,updateUserController);

router.post('/',createUserController);

module.exports = router;
/*
#user details
These are POST ROUTES
/deleteUser(soft delete)
/getAllUsers
/UpdateUser..but on what based? 

*/


