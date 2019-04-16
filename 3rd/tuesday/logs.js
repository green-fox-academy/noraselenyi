// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.

const fs = require('fs');
const read = fs.readFileSync('log.txt', 'UTF-8');
let lines = read.split('\n');
//console.log(lines);                    // soronként arrayben

function arrays(){
    let ips = [];
    for (let i = 0; i < lines.length; i++){
        let toAdd = lines[i].substr(27,11);
        
        if (ips.indexOf(toAdd) === -1){
            ips.push(toAdd);
        }
    }
    return ips.sort();
}
console.log(arrays());


// Write a function that returns the GET / POST request ratio.
function getToPost(){
    let gets = 0;
    let posts = 0;
    for (let i = 0; i < lines.length; i++){
        if (lines[i][41] === "P"){
            posts += 1;
        } else {
            gets += 1;
        }
    }
    console.log(gets, posts);
    console.log(gets/ posts);
}
console.log(getToPost());