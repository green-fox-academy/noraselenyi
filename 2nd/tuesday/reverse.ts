'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

var to_reverse_array = reversed.split("");
var reversed_array = to_reverse_array.reverse();
var result = to_reverse_array.join("");
console.log(result);

