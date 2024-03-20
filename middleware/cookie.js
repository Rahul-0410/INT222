var express = require('express');
var cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser())
app.use(cookieSession({
    name:'session',
    keys:['key1','key2'],
    maxAge:24*60*60*1000
    
}));

app.get('/',function(req,res){
    req.session.cookieName = 'cookievalue';
    res.send('cookieset!');
})
app.get('/get-cookie',function(req,res){
    const cookieValue = req.session.cookieName;
    res.send(`cookie value: ${cookieValue}`);
})
app.listen(3000);