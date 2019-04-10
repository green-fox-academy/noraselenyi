'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.


var xs = [300, 450, 300, 150];
var ys = [150, 300, 450, 300];

function draw(x, y){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = 'green';
    ctx.lineTo(300, 300);
    ctx.stroke();
}

for (let i = 0; i < xs.length; i++){
    draw(xs[i],ys[i]);
}
