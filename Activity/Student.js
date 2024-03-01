//Activity 3
var Student={
    Name:"Rahul",
    Age:21,
    Marks:"300/450",
    DOB: "04-10"
}

var a= JSON.stringify(Student);
console.log(a);

var b=JSON.parse(a);
console.log(b);