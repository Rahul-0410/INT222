
// var http=require('http');
// var server=http.createServer(function(req,res){
//     if(req.url=='/'){
//         res.write('welcome to home');
//         res.end();
//     } else if(req.url=='/emp'){
//         res.write('welcome to emp page');
//         res.end();
//     }
//      else if(req.url=='/admin'){
//         res.write('welcome to admin page');
//         res.end();
//     } else{
//         res.write('Invalid input');
//         res.end();
//     }
// })

// server.listen(8008);


var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
    if(req.url=='/'){
        res.write('welcome to home');
        res.end();
    } else if(req.url=='/emp'){
        // res.write('welcome to emp page');
        fs.readFile("")
        res.end();
    }
     else if(req.url=='/admin'){
        res.write('welcome to admin page');
        res.end();
    } else{
        res.write('Invalid input');
        res.end();
    }
})

server.listen(8008);