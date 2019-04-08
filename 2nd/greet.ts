// -  Create variable named `nameToGreet` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `nameToGreet`

'use strict';

var nameToGreet: string = "";

function greet(nameToGreet): string {
    if (nameToGreet.length >= 1) {
        return "Greetings, dear " + nameToGreet;
    } else {
        return "There is noone to greet :((";
    }
}

console.log(greet(nameToGreet));