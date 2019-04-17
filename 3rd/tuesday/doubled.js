// Create a method that decrypts duplicated-chars.txt

const fs = require('fs');

function decripting(filename){
    const read = fs.readFileSync(filename,'UTF-8');
    let toAdd = [];

    for (let i = 0; i <= read.length; i+=2){
        toAdd.push(read[i]);
    }
    toAdd.join('\n');
    let result = toAdd.join('');

    return result;
}

// let nemtom = [1,2,3];
// console.log(nemtom[(nemtom.length)-1])


console.log(decripting('duplicated-chars.txt'));