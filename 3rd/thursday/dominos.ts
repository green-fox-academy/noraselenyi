import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(9, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

//print(dominoes);

let result = [];
let starter = 0;

for (let i = 0; i < initializeDominoes().length; i++){
    //console.log(initializeDominoes()[i].values);
    result.push(initializeDominoes()[i].values);
}
//console.log(result)


for (let i = 0; i < result.length; i++){
    for (let j = 0; j < result.length; j++){
        //console.log(result[j][0]);
        if (result[i][0] != result[j][1]){
            starter = result[i][0];
        }
    }
}
console.log(starter)