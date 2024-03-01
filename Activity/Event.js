//Activity2
let event = require('events');
let obj= new event.EventEmitter;

obj.once("Dancing", (msg) => {
    console.log(msg);
})

obj.emit("Dancing","abc");

let fun=(msg)=>{
    console.log(msg);
}

obj.on("d",fun);

obj.emit("d",4+5);

obj.addListener("go",fun);
obj.emit("go","Lost in the world");