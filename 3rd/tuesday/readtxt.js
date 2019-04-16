const fs = require('fs');

const read = fs.readFileSync('gyumik.txt', 'UTF-8');
const fruits = read.split('\n');                                // listát csinál, \n-nél ','

//console.log(fruits)

fruits.push('meggy');                                   // hozzáír, de nem bele, minden futtatásnál

//console.log(fruits.join('\n'));


fs.writeFileSync('gyumik.txt', fruits.join('\n'));

fs.appendFileSync('gyumik.txt', '\nbanananaaaaaaaa');