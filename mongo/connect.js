const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/studentdb1")
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(`No connection ${err}`);
})

const stds=mongoose.Schema({
    name:String,
    age:Number
})

const savedb=async()=>{
    const stud=mongoose.model('students',stds);
    let data=new stud({name:"Rahul",age:21});
    const result=await data.save();
    console.log(result);
}
savedb();
// const insert=async()=>{
//     const stud=mongoose.model('students',stds);
//     let data=await stud.insertMany([
//         {name:"Manoj",age:34},
//         {name:"Manoj1",age:24}
//     ])
//     console.log(data);
// }
// insert();

const update=async()=>{
    const stud=mongoose.model('students',stds);
    let data=await stud.updateMany(
        {'name':"Manoj1"},{$set:{'age':38}},
    )  
    
    console.log(data);
}
update();