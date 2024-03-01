//node ./fs to run in terminal
// encoding will be used for removing buffer
const fs=require('fs');

//synchronous reading file
// const a=fs.readFileSync("hello.json");
// let parsed=JSON.parse(a);

//this method don't work for nested json files
// let ac=JSON.stringify(parsed,["Ans"],7);
// console.log(ac);
// console.log(a);
// console.log(parsed);


//async file reading
// can be used for multiple purposes 
// fs.readFile("hi.json",(err,data)=>{
//     if(err) return err;
//     let parsed=JSON.parse(data);
//     let a=JSON.stringify(parsed);
//     // console.log(parsed);
//     console.log(a);
// })


// write file sync 
// let a={
//     Name:"RGS",
//     Age:21,
//     Section:"MR"
// }
// var parsed=JSON.stringify(a);
// var b=fs.writeFileSync("Students.json",parsed);
// console.log(b);

//write file aync
// let a={
//     Name:"RGS",
//     Age:21
// }

// var parsed=JSON.stringify(a);
// fs.writeFile("abc.json",parsed,(err)=>{
//     if(err) return err;
//     console.log("written");
// })

//rename
// fs.renameSync("abc.json","abc1.json");

// const fs = require('fs');

// fs.rename("Students.json", "Student.json", (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Rename successful');
// });


//deleting file
// fs.unlinkSync("Student.json");

// fs.unlink("abc1.json",(err)=>{
//     if(err) return err;
//     console.log("deleted async");
// })

// rename
// fs.renameSync("1.json","hi.json");

// fs.rename("2.json","hello.json",(err)=>{
//     if(err) throw err;
//     console.log("Renamed");
// })

//copying

// fs.copyFileSync("hi.json","copy.json");

// fs.copyFile("hi.json","copy.json",(err)=>{
//     if(err) throw err;
//     console.log("Copy done!!");
// })

// fs.appendFileSync('test.txt','hello my name is gupta');





