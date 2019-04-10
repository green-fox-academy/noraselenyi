'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

var box = [[10, 10], [290,  10], [290, 290], [10, 290]];
var plswork = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function connector(coord){
    for (let i = 0; i < coord.length-1; i++){
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.moveTo(coord[i][0], coord[i][1]);
        ctx.lineTo(coord[i+1][0], coord[i+1][1]);

        if (i === coord.length-2){
            ctx.lineTo(coord[0][0], coord[0][1]);
        }
        
        ctx.stroke();
    }

}

connector(box);
connector(plswork);
