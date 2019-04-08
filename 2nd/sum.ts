// Write a function called `sum` that returns the sum of numbers from zero to the given parameter
'use strict';
var num_until: number = 10;

function sum(num_until):number {
    var sum_of_num: number = 0;
    for (let i = 1; i <= num_until; i++){
        sum_of_num = sum_of_num + i;
    }
    return sum_of_num
}

console.log(sum(num_until));