
let event = require('events');

let obj= new event.EventEmitter;

obj.once("Dancing", (msg) => {
    console.log(msg);
})
// addlistener and on work same but once outputs or run only once no matter how many times we have called it
var fun = (msg) => {
    console.log(msg);
}
// obj.on("Dancing", fun);
// obj.addListener("Dancing", (msg) => {
//     console.log(msg);
// })
// obj.emit("Dancing","Let's Dance");
// obj.emit("Dancing","Let's Dance2");
// obj.emit("Dancing","Let's Dance3");

// obj.setMaxListeners(8);
// for(let i=0;i<11;i++){
//     obj.addListener("d",(msg)=>{
//         console.log(msg);
//     })
// }
// obj.emit("d","ABC");

function welcome () {
    console.log("Hi");
}
// var id = setTimeout(welcome,1000);
//repetative
var id1 = setInterval(welcome,1000);
setInterval(() => {
    console.log("Bye");
}, 1000);
// clearTimeout(id);
// clearInterval(id1);