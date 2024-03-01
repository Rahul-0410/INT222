//forof loop is for array
//forin loop is for objects

let a=10;
let b=5;
let c=6;

if(a>b && a>c){
    console.log("a is greater");
}else if(b>a && b>c){
    console.log("b is greater");
}else{
    console.log("c is greater");
}

let five=5;
for(let i=0;i<=10;i++){
    console.log(`${five} X ${i}=`,five*i);
}

let i=0;
do {
    console.log(`${five} X ${i}=`,five*i);
    i++;
} while (i<=10);

let arr=[1,2,3,40];
for (const k of arr) {
    console.log(k);
}

let obj={
    a:1,
    b:2,
    d:5
}

for (const key in obj) {
    console.log(obj[key]);
}