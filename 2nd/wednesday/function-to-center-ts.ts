'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function linedrawer(x, y){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = 'blue';
    ctx.lineTo(300, 300);
    ctx.stroke();
}

for (let i = 0; i <= 600; i+=20){
    linedrawer(i, 0);
    linedrawer(0, i);
    linedrawer(i, 600);
    linedrawer(600, i);
}
