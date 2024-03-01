var http = require("http")
let fs = require("fs")

var server = http.createServer( (req, res) =>{
    if(req.url == '/'){
        
        res.write('Welcome to Index');
        res.end()
    }
    else if(req.url == "/emp"){
        res.write("Employee page")
        fs.readfile("hello.html", "utf8", function(err, data){
            if(err){
                console.log("Could not find or open file for reading");
            }else{
                // res.writeHead(200, {"Content-Type": "hello.html"})
                res.end(data);
            }
        })
        
    }
    else if(req.url == '/admin'){
        // res.write("Welcome to admin page")
        // res.end();
        if(err){
            console.log("Could not find or open file for reading");
        }else{
            res.end(data);
        }


    }

})
server.listen(3000)