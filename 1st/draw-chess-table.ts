/*
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//*/

'use strict';

let lineCount: number = 16;
let odd_lines: string = "";
let even_lines: string = "";

for (var i = 1; i <= lineCount; i++){
    if (i % 2 ===1){
        for (var j = 1; j <= (lineCount/2); j++){
            odd_lines += "% ";
        }
    } else if (i % 2 ===0){
        for (var k = 1; k <= (lineCount/2); k++){
            even_lines += " %";
        }
    }
    console.log(odd_lines+even_lines);
    odd_lines ='';
    even_lines='';
}