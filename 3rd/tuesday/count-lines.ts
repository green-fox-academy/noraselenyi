// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
'use strict';

let fs = require('fs');

function lineCounter(filename){
    const read = fs.readFileSync(filename,'UTF-8');

    const lines = read.split('\n');
    return lines.length
}


try {
    console.log(lineCounter('my-file.txt'));
} catch (err){
    console.log('zero');
}