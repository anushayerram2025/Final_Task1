

  const fetchProfile=function(req,res,next){
    if (req.user.Username==req.params.username){
        next();
    }
    else{
        return res.sendStatus(401);

    }
    
  }
module.exports=fetchProfile