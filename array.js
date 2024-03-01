// var arr=[10,20,30,45,36,12];
// arr[6]=100;
// console.log(arr);

// var arr1=new Array();
// arr1[0]=3;
// arr1[1]=4;
// arr1[2]=7;
// arr1[3]=90;
// arr1[4]=60;
// console.log(arr1.length);
// console.log(arr1.pop());
// console.log(arr1.push(4));
// console.log(arr1.at(3));

// var arr3=[23,45,40,67];
// console.log(arr3.sort());
// console.log(arr3.reverse());

// console.log(arr1.concat(arr3));
// console.log(arr1.length);
// console.log(arr1.sort());

var arr4=[10,20,30,40,50];
// 2 0 1 means copy at index at 2 from 0 to 1 i.e at 2 = 30 copy 10
console.log(arr4.copyWithin(2,0,1));

//it removes the first elemnt and return its value
// arr4.shift();
// console.log(arr4);

//add value at first place by shifting left to right
// arr4.unshift(100);
// console.log(arr4);

// var number=[2,4,8];

//.every can be used to run through array to check all the values for a certain condition
// var val=number.every(function(x){
//     return x%2==0;
// })

// console.log(val);

//practice every, some, filter

// The some() method tests whether at least one element in an array passes a provided test implemented by a callback function.
// const numbers = [1, 2, 3, 4, 5];

// // Check if at least one number is even:
// const hasEven = numbers.some(num => num % 2 === 0); // true
// console.log(hasEven);

// // Check if at least one number is negative:
// const hasNegative = numbers.some(num => num < 0); // false
// console.log(hasNegative);

// The filter() method creates a new array with all elements in the original array that pass a provided test implemented by a callback function.
// Syntax: array.filter(callbackFn, [thisArg])
// const numbers = [1, 2, 3, 4, 5];

// // Filter even numbers:
// const evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]

// // Filter positive numbers:
// const positiveNumbers = numbers.filter(num => num > 0); // [1, 2, 3, 4, 5]

// // Filter elements with length over 4:
// const words = ["hello", "world", "JavaScript"];
// const longWords = words.filter(word => word.length > 4); // ["JavaScript"]



let aru=["A","B","C","D","E"];
aru.splice(2,0,'D','E','F');
console.log(aru)

// console.log(Array.from("Rahul"));

// var Arr=[10,20,30];
// var b=Arr.entries();
// // console.log(b.next().value);
// // console.log(b.next().value);
// // console.log(b.next().value);
// let i=0;
// while(i<3){
//     console.log(b.next().value);
//     i++;
// }

// slice 
let arr1=[10,20];
let arr2=[30,40];
let arr3=[100,...arr1,...arr2];
console.log(arr3);

// rest operator
// var [arr,...arr2]=[10,20,30,40,89];
// console.log(arr);
// console.log(arr2);

var item=[1,3,5,7,9];
// console.log(item.splice(1,3));
console.log(item.slice(1,3));


var path = require('path');
var fname = path.basename("/users/node/sample.js");
console.log(fname);
