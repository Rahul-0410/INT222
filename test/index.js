var exp=require('express')
// var body=require('body-parser')
// var encode=body.urlencoded({extended:true})
const app = exp()


app.get("/form",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
// app.post('/formpro',encode,(req,res)=>{
//     res.send(
//         {
//         name:req.body.name,
//         Number:req.body.num,
//         email:req.body.email,
//         gender:req.body.gender,
//         password:req.body.password
//     }
//     )
// })

app.listen(3000, ()=>{
    console.log("Running at port 3000");
})