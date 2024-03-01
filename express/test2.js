const express = require("express")


const app = express()

app.get("/", (req, res)=>{
    res.send("Home page")
})


app.get("/null", (req, res)=>{
    let obj = {
        a: null,
        b: undefined,
        c: 90
    }
    
    let objSTring = JSON.stringify(obj)
    res.write(objSTring)
    res.send()
    
})


app.get("/home", (req,res)=>{
    res.send([
        {
            "name": "Parth"
        },
        {
            "roll": 4
        },
        {
            "username": "skillzee",
            
        },
        {
            a: null,
            b: undefined
        }
    ])
})

app.get("/form",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})


app.listen(3000, ()=>{
    console.log("Running at port 3000");
})