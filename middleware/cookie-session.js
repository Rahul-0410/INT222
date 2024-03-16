var express = require('express');
var cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
var app = express();
// app.use(cookieParser())
app.use(cookieSession({
    name:'session',
    kyes:['key1','key2'],
    // maxAge:100,
    // resave:true,
    uninitialized:false,
    secret:'989'
}))

app.get('/',function(req,res){
    // res.end("Max age of session "+req.sessionOptions.secret);
    req.session.views=(req.session.views||0) + 1;
    res.send(req.session.views+'views');
})
app.listen(3008);


// this one is working

// var cookieSession = require('cookie-session')
// var express = require('express')

// var app = express()

// //app.set('trust proxy', 1) // trust first proxy

// app.use(cookieSession({
//   name: 'session',
//   keys: ['key1', 'key2']
// }))

// app.get('/', function (req, res, next) {
//   // Update views
//   req.session.views = (req.session.views || 0) + 1

//   // Write response
//   res.end(req.session.views + ' views')
// })

// app.listen(3008)
