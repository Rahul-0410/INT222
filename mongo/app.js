const express=require("express")
// require("./connection")
const app=express();
//const body1=require('body-parser');
const Student1=require("./connect");
//app/use(express.json());
//const encoded=body1.urlencoded({extended:false})
app.get("/",(req,res)=>{
    res.send("hello");
})
app.listen(3000,()=>{
    console.log("Running")
})