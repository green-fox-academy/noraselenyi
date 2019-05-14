'use strict';

export function anagram(isit: string, init: string): boolean{
    if (isit.split('').sort().join('') === init.split('').sort().join('')){
        return true;
    } else {
        return false;
    }
}

//console.log(anagram('anna', 'anan'));