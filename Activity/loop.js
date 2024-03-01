// // Activity 1: Write a program to print following pattern :-
// // *
// // **
// // ***



function printPattern(rows) {
    // for (let i = 1; i <= rows; i++) {
    //     let pattern = '';
    //     for (let j = 1; j <= i; j++) {
    //         pattern += '*';
    //     }
    //     console.log(pattern);
    // }

    for(let i=0;i<=rows;i++){
        let pattern='*';
        console.log(pattern.repeat(i));
    }
}

printPattern(3);

function placeMiddleThree(arr) {
    if (arr.length < 3) {
        return "Input array should have at least 3 elements";
    } else {
        const middleIndex = Math.floor(arr.length / 2);
        const middleThree = arr.slice(middleIndex - 1, middleIndex + 1);
        const newArray = [...middleThree, ...arr, ...middleThree];
        return newArray;
    }
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5, 6];
console.log(placeMiddleThree(inputArray)); // Output: [3, 4, 1, 2, 3, 4, 5, 6, 3, 4]
