// var zlib=require('zlib');
// var fs=require('fs');

// var gzip=zlib.createGzip();
// var r=fs.createReadStream('text2.txt');
// var w=fs.createWriteStream('text.txt.gz');
// r.pipe(gzip).pipe(w);

// let num=931;
// let sum=0;
// let count=0;

// function countSum(num1){
//     while(num1>=1){
//         let div=num1%10;
//         sum+=div;
//         num1/=10;
//         count++;
//     }
// }
// countSum(num);

// if(sum>=10){
//     countSum(sum)
// } else{
//     console.log(count);
// }

let num = 9311;
let sum = 0;
let count = 0;

function countSum(num1) {
    // sum=0;
    while (num1 >= 1) {
        sum=0;
        let div = num1 % 10;
        sum += div;
        num1 = Math.floor(num1 / 10); // Perform integer division
       // num1/=10;
        count++;
    }
}

countSum(num);
//console.log(sum);
if (sum >= 10) {
    // sum=0;
    countSum(sum);
} else {
    console.log(count);
}
