// const exp=require('express');
// // console.log(exp);
// var obj=new exp();

// obj.get('/',(req,res)=>{
//     res.send("Hi");
// })
// obj.get('/admin',(req,res)=>{
//     res.send("Admin");
// })

// obj.listen(3008,()=>{
//     console.log("running");
// })

const exp = require('express');
const obj = new exp();


const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' }
];

obj.get('/', (req, res) => {
   
    res.json(data);
});

obj.get('/admin', (req, res) => {
    res.send("Admin");
});
obj.get('/json', (req, res) => {
    res.send([
        {
            name:"rgs",
            age:13
        },
        {
            name:"rgs3",
            age:17,
            a:null,
            b:undefined
        },
        {
            name:"rgs2",
            age:20
        }
    ]);
});

obj.listen(3008, () => {
    console.log("Server is running on port 3008");
});
