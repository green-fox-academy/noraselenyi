// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

var lines: number = 5;
var toprint: string = "";

for (var i = 1; i <= lines; i++){
    toprint += "*";
    console.log(toprint);
}