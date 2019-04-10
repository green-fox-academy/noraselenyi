'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

var sizes = [600, 500, 400, 300, 200, 100];
var colors= ['red', 'blue', 'green', 'black', 'purple', 'white'];


function squares(size, color){
    ctx.fillStyle = color;
    ctx.fillRect((300-size/2),(300-size/2), size, size);  
}


for (let i = 0; i < sizes.length; i++){
    squares(sizes[i], colors[i]);
}
