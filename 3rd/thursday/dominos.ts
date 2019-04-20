import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
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

// let arrayOfDominos = [];

// for (let i = 0; i < initializeDominoes().length; i++){
//     arrayOfDominos.push(initializeDominoes()[i].values);
// }
// console.log(arrayOfDominos)

let result: any[] = []; 
//result.push(arrayOfDominos[0]);
//console.log(arrayOfDominos[0]);
result.push(dominoes[0]);

//console.log(dominoes);
// console.log(result[0][1]);



// for (let i = 0; i < arrayOfDominos.length; i++){
//     for (let j = 0; j < arrayOfDominos.length; j++){
//         if (arrayOfDominos[j][0] === result[i][0]){
//             result.push(arrayOfDominos[j]);
//         }
//     }
    
// }

for (let i = 0; i < dominoes.length; i++){
    for (let j = 0; j < dominoes.length; j++){
        if (dominoes[j].getvalue('a') === result[i].getvalue('b')){
            result.push(dominoes[j]);
        }
    }
    
}
console.log(result);
