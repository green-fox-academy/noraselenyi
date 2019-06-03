'use strict';

export function anagram(isit: string, init: string): boolean{
    return isit.split('').sort().join('') === init.split('').sort().join('');
}

//console.log(anagram('anna', 'anan'));