'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
var indexfrom: number = 0;

for (let i=0; i < quote.length; i++){
    if (quote[i]==="I" && quote[i+1]=== "t"){
        indexfrom = (i+1);
    }
}

var part1: string = quote.substring(0,indexfrom+1);
var to_insert: string = "always takes longer than";
var part2: string = quote.substring(indexfrom+2);

console.log(part1, to_insert, part2);

