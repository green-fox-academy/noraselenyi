'use strict';

export function countLetters(input: string): any {
    let counter: any = {};

    for (let i: number = 0; i < input.length; i++){
        if (counter[input[i]]){
            counter[input[i]] += 1;
        } else {
            counter[input[i]] = 1;
        }
    };
    return counter;
};




console.log(countLetters('blabla'));
// object