// const buf = Buffer.alloc(6,'parth');
// console.log(buf.fill('a'));


// const buf1 = Buffer.from('buffer').toString();
// const buf2 = Buffer.from(buf1)
// console.log(buf2.toString());
// console.log(buf1.toString());



// const buf1 = Buffer.from("This is Node.js class")
// const buf2 = Buffer.from('23456789eafc3456787', 'hex')
// console.log(buf2.toString());
// console.log(buf1.toString('hex'));




// const buf1 = Buffer.from("This is Node.js class")
// const buf2 = Buffer.from('23456789eafc3456787', 'utf8')
// console.log(buf2.toString());
// console.log(buf1.toString('utf8'));



// const buf1 = Buffer.from("This is Node.js class")
// const buf2 = Buffer.from('23456789eafc3456787', 'utf16le')
// console.log(buf2.toString());
// console.log(buf1.toString('utf16le'));



// const buf1 = Buffer.from("This is Node.js class")
// const buf2 = Buffer.from('23456789eafc3456787', 'latin1')
// console.log(buf2.toString());
// console.log(buf1.toString('latin1'));


// const buf1 = Buffer.from("This is Node.js class")
// const buf2 = Buffer.from('23456789eafc3456787', 'base64')
// console.log(buf2.toString());
// console.log(buf1.toString('base64'));



// const buf1 = Buffer.from("This is Node.js class")
// const buf2 = Buffer.from('23456789eafc3456787', 'ascii')
// console.log(buf2.toString());
// console.log(buf1.toString('ascii'));



buf  = new Buffer.alloc(50)
n = buf.write("This is Node.js class")
console.log("The number of octets are:"+n);






var buf1 = Buffer.from("wow")
var buf2 = Buffer.from("hell")
var buf3 = Buffer.concat([buf1,buf2], 7);
console.log(buf3.toString());



var buffer1 = Buffer.from('ABCD')
var buffer2 = Buffer.from('ABCD')
var result = buffer1.compare(buffer2)
if(result==0){
    console.log("True");
}else{
    console.log("False");
}




