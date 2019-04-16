// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

const fs = require('fs');

function ticTacResult(filename){
    const read = fs.readFileSync(filename, 'UTF-8');
    let arrayed = read.split('\n');


    // O wins
    if (arrayed[0][0]==="O"){
        if (arrayed[1][0]==="O" && arrayed[2][0]==="O" || arrayed[1][1]==="O" && arrayed[2][2]==="O"){
            return 'O won';
        }
    }
    if (arrayed[0][2]==="O"){
        if (arrayed[1][2]==="O" && arrayed[2][2]==="O" || arrayed[1][1]==="O" && arrayed[2][0]==="O"){
            return 'O won';
        }
    }
    if (arrayed[0][0]==="O" && arrayed[0][1]==="O" && arrayed[0][2]==="O" ||
    arrayed[1][0]==="O" && arrayed[1][1]==="O" && arrayed[1][2]==="O" || 
    arrayed[2][0]==="O" && arrayed[2][1]==="O" && arrayed[2][2]==="O" || 
    arrayed[0][1]==="O" && arrayed[1][1]==="O" && arrayed[2][1]==="O"){
        return 'O won';
    }

    

    // X wins
    if (arrayed[0][0]==="X"){
        if (arrayed[1][0]==="X" && arrayed[2][0]==="X" || arrayed[1][1]==="X" && arrayed[2][2]==="X"){
            return 'X won';
        }
    }
    if (arrayed[0][2]==="X"){
        if (arrayed[1][2]==="X" && arrayed[2][2]==="X" || arrayed[1][1]==="X" && arrayed[2][0]==="X"){
            return 'X won';
        }
    }
    if (arrayed[0][0]==="X" && arrayed[0][1]==="X" && arrayed[0][2]==="X" ||
    arrayed[1][0]==="X" && arrayed[1][1]==="X" && arrayed[1][2]==="X" || 
    arrayed[2][0]==="X" && arrayed[2][1]==="X" && arrayed[2][2]==="X" || 
    arrayed[0][1]==="X" && arrayed[1][1]==="X" && arrayed[2][1]==="X"){
        return 'X won';
    }

    // Draw
    else {
        return "Draw";
    }
}


console.log(ticTacResult('win-o.txt'))
// Should print "O"

//console.log(ticTacResult('win-x.txt'))
// Should print "X"

//console.log(ticTacResult('draw.txt'))
// Should print "Draw"