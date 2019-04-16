// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: 
// "Unable to write file: my-file.txt"


const fs = require('fs');

function manipulate(){
    const name = "Nora"; 
    fs.writeFileSync('namelist.txt', name);
    return fs.readFileSync('namelist.txt', 'UTF-8');
}


try {
    console.log(manipulate());
} catch {
    console.log('Unable to write file: my-file.txt');
}