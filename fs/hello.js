//search this in browser
// http://127.0.0.1:8081/
// const fs=require('fs')
// var http=require("http");
// http.createServer(function(request,response){
//   response.writeHead(200);

//   fs.readFile("test.js",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
//   })
//   response.end("Hello; Welcome RGS");

// }
// ).listen(8081);

const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  fs.readFile('test.txt', (err, data) => {
    if (err) throw err;
  
    res.end(data);
  });
});

server.listen(8081);
