const express = require('express');
const signupRouter=express.Router();

function router(nav){

    signupRouter.get('/',function(req,res){
     res.render("SignUp",
        {
            nav,
            title:'SignUp',
        });
    });

    return signupRouter;
}

module.exports = router;