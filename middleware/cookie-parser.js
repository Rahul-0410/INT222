var express = require('express');

const cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser())
app.get('/',function(req,res){
    console.log('cookies: ',req.cookies)
    console.log('cookies: ',req.signedCookies)
    res.send('cookies received. Check the console');
})
app.listen(3007);