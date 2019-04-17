// Create a method that decrypts encoded-lines.txt

const fs = require('fs');

const read = fs.readFileSync('encoded-lines.txt', 'UTF-8');
var res = read.toLowerCase();

const letters = 'abcdefghijklmnopqrstuvwxyz';
const characters = '[]/ +-.()';

//console.log(res[853]);

for (let i = 0; i < res.length; i++){
    let result = letters.indexOf(res[i]);
    console.log(result);

    // if (letters.indexOf(res[i]) === -1){
    //     characters.indexOf(res[i])   
    // }
}