
// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console


'use strict';
var ai: number[] = [3, 4, 5, 6, 7];
var sum: number = 0;

for (let i= 0; i < ai.length; i++){
    sum += ai[i];
}

console.log(sum);