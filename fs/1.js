
var json={
    Name:"RGs",
    Age:21,
    M:100
}

// console.log(json);
// json.parse 
// json.stringify
var a =JSON.stringify(json);
console.log(a); 
var c =JSON.stringify(json,null,5);
console.log(c); 
var b=JSON.parse(a);
console.log(b); 