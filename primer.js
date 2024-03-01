
// var a=10.78678;
// console.log(typeof a);

//big int
// var a1=1234n
// console.log(typeof a1);

// var x=BigInt("0xffff");
// console.log(x);
// console.log(typeof x);

var d="string";
var e=null;
var f;
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);

//Symbol declare
var f=Symbol();
console.log(typeof f);

//here false is given as symbol always gives unique value so comparison will give false
var g=Symbol("H");
var h=Symbol("H");
console.log(g==h);