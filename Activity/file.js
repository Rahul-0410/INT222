//Activity 4
const fs=require('fs');
var http = require('http');
// console.log(fs);

const server=http.createServer(function(req,res){
    if (req.url == '/')
{
res.write('Welcome to Index1 page');
res.end();
} 

else if (req.url == "/json")
{
console.log("HTTP works!");
fs.readFile("1.json", "utf8", function(err, data){
if (err){
console.log('Could not find or open file for reading\n');
} else {

res.end(data);
}
})
}

})

server.listen(2100);

console.log('Server is running at port 2100');


// write js function that takes an array as input and returns a new array containing the middle three elements of the input array. if the input is less than 3 elements return input array length should have atelat 3 elements'
