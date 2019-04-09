// -  Create a variable named `baseNum` and assign the value `123` to it
// -  Create a function called `doubling` that doubles it's input parameter and returns with an integer
// -  Log the result of `doubling(baseNum)` to the console

'use strict';

var baseNum: number = 123;

function doubling(baseNum): number {
    var double = baseNum * 2;
    return double;
}

var result = doubling(baseNum);
console.log(result);