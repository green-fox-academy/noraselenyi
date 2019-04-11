//Given a string, compute recursively a new string where all the 
//'x' chars have been removed.

'use strict';


var result: string = "";

function create_string(blabla: string): any {
    if (blabla.length > 0){
        if (blabla[0] === 'x') {
            result += '';
        } else {
            result += blabla[0];
        }
        return create_string(blabla.substr(1));
    } else {
        return result;
    }
}
console.log(create_string("x tho "));
