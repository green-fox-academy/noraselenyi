// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

'use strict';
var numList: number[] = [1, 2, 3, 8, 5, 6];


var result: number[]= numList.map(num => {
    if (num === 8) {
        num = 4;
    } 
    return num;
});

console.log(result);
