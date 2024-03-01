let myArray = [3, 100, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// console.log("Join ",myArray.join(","));
myArray.sort((a,b)=>{
    b-a;
})
console.log(myArray);

// console.log("Slice",myArray.slice(2,6));

// console.log("Splice",myArray.splice(3,2));
// console.log("After splice",myArray);

// console.log("Copywithin",myArray.copyWithin(0,5));

// let n = 4;
// for (let i = 1; i <= n; i++) {
//     let spaces = "";
//     let stars = "";
//     for (let j = n - i; j > 0; j--) {
//         spaces += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         stars += "*";
//     }
//     console.log(spaces + stars);
// }
