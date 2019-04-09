// -  Create a function called `factorio`
//    that returns it's input's factorial

'use strict';

var fact_of: number = 4;
var fact_is: number = 1;

function factorio(fact_of):number {
    for (let i= 1; i <= fact_of; i++){
        fact_is *= i;
    }
    return fact_is;
}

console.log(factorio(fact_of));