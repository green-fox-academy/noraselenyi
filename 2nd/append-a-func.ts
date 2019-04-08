// -  Create a string variable named `typo` and assign the value `Chinchill` to it
// -  Write a function called `appendAFunc` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendAFunc(typo)`

'use strict';

var typo: string = "Chinchill";

function appendAFunc(typo): string {
    var result = typo + "a";
    return result;
}

console.log(appendAFunc(typo));