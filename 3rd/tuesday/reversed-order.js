// Create a method that decrypts reversed-order.txt

const fs = require('fs');



function decripter(){
    const read = fs.readFileSync('reversed-order.txt', 'UTF-8');
    let splitted = read.split('\n');
    
    let result = splitted.reverse();    
    return result.join('\n');
}
console.log(decripter());