//Given a string, compute recursively a new string where all 
//the adjacent chars are now separated by a *

'use strict';

var result: string = "";

function starstring(word: string):any {
    if (word.length > 0){
        result += word[0] + "*"
        return starstring(word.substr(1));
    } else {
        return result;
    }
}


console.log(starstring("WOW"));