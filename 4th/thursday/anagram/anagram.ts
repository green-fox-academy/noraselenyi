'use strict';

export function anagrams(first: string, second: string): boolean{
    let tocheck: string = '';
    for (let i: number = second.length-1; i >= 0; i--){
        tocheck += second[i];
    }
    if (first === tocheck){
        return true;
    } else {
        return false;
    }
}



//console.log(anagrams('anna', 'anna'));

