'use strict';

export function anagrams(first: string, second: string) {
    if (first.length === second.length){
        let firstcounter: string = first.split('').sort().join('');
        let secondcounter: string = second.split('').sort().join('');
        if (firstcounter === secondcounter){
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}


console.log(anagrams('anna', 'annn'));
