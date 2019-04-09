// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

'use strict';

var linecount: number = 4;
var matrix: number[][] = [];
var newarray: number[] = [0,0,0,0];

for (let j = 0; j < linecount; j++){
    for (let i = linecount-1; i >= 0; i--){
        newarray[i] = 1;
        matrix.splice(j, 0, newarray);
        newarray = [0,0,0,0];
    }
}

console.log(matrix)