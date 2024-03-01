// var fs=require('fs');
// var reader=fs.createReadStream('text2.txt')
// var writer=fs.createWriteStream('text4.txt');
// writer.on('pipe',()=>{
//     console.log('Something is piping into the writer.');
// });
// reader.pipe(writer);

var fs=require('fs');
var reader=fs.createReadStream('test.txt')
var writer=fs.createWriteStream('text2.txt');
writer.on('unpipe',()=>{
    console.log('unpiping');
});
reader.unpipe(writer);