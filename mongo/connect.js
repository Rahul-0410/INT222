const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/studentdb")
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(`No connection ${err}`);
})