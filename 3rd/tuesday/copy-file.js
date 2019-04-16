// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

function copy(from, to){
    const readfrom = fs.readFileSync(from, 'UTF-8');
    fs.writeFileSync(to, readfrom);

    const newfile = fs.readFileSync(to, 'UTF-8');

    let fromFile = readfrom.split('\n');
    let toFile = newfile.split('\n');

    for (var i = 0; i < fromFile.length; i++){
        if (fromFile[i] === toFile[i]){
            return true;
        } else {
            return false;
        }
    }
}
console.log(copy('gyumik.txt', 'gyumik2.txt'));