// const express=require("express")
// // require("./connection")
// const app=express();
// //const body1=require('body-parser');
// const Student1=require("./connect");
// //app/use(express.json());
// //const encoded=body1.urlencoded({extended:false})
// app.get("/",(req,res)=>{
//     res.send("hello");
// })
// app.listen(3000,()=>{
//     console.log("Running")
// })

const express=require("express");
const app=express();
const student1=require("./connect1");

app.get("/",(req,res)=>{
    res.send("hello");
})

app.get("/list",async(req,res)=>{
    // res.send("hello");
    let data=await student1.find();
    res.send(data);
})

app.listen(3002);