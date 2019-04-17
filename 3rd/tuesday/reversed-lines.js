// Create a method that decrypts reversed-lines.txt

const fs = require('fs');
let newArray = [];

function reversing(filename){
    const read = fs.readFileSync(filename, 'UTF-8');
    let splitted = read.split('\n');
    console.log(splitted);
    
    for (let i = 0; i < splitted.length; i++){
        newArray.push(splitted[i].split('').reverse().join(''));
    }
    let joinedArray = newArray.join("\n");  
    return joinedArray;
}
console.log(reversing('reversed-lines.txt'));
