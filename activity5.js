var express = require('express');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
var app = express();
var path1 = require('path')
var encoded = bodyParser.urlencoded({ extended: true });
app.use(cookieParser());
app.use(cookieSession({
    secret: 'your+secret_key',
    resave: false,
    saveUninitialized: true
}));
var path2 = (__dirname)
console.log(path2)
app.get('/login1', function (req, res) {
    res.sendFile(path2 + "/login.html");
});

app.post('/login1', encoded, function (req, res) {
    var username1 = req.body.username;
    var password1 = req.body.password;
    var user = { username: username1, password: password1 };

    // Set cookie with the user's information
    req.session.user = user;
    res.send("Cookie set successfully!");
});

app.get('/getcookie', function (req, res) {
    // Get cookie and display its contents
    if (req.session.user) {
        res.send(`Cookie found! Username: ${req.session.user.username}, Password: ${req.session.user.password}`);
    } else {
        res.send("No cookie found!");
    }
});

app.get('/deletecookie', function (req, res) {
    // Delete the cookie
    req.session = null;
    res.send("Cookie deleted successfully!");
});

app.listen(3001);