const express=require('express');
var connect=require('connect');
var obj=express();
var logged=function log(req,res,next){
    console.log("Logged");
    console.log(req.originalUrl);
    console.log(req.method);
    next();
}

obj.use('/admin',logged,function(req,res,next){
    console.log("running");
    // res.send("logged in");
    res.sendStatus(401);

})
obj.use(logged);
obj.listen(3002);