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
    age:Number,
    marks:Number
})

const marks=mongoose.model('students1',stds)
let data=new marks({
    'marks':20
})
data.save().then(
    (msg)=>{
        console.log(msg);
    }
)
    .catch(
        (err)=>{
            console.log(err);
        }
    )
module.exports=mongoose.model('students1',stds);