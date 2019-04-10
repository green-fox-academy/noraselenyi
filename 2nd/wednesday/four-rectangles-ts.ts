'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

var xs = [150, 250, 350, 450];
var ys = [150, 250, 350, 450];
var ws = [20, 30, 40, 50];
var hs = [40, 60, 80, 100];
var colors = ['red', 'blue', 'green', 'black'];

function rectangles(x, y, w, h, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);   
}

for (let i = 0; i < xs.length; i++){
    rectangles(xs[i], ys[i], ws[i], hs[i], colors[i])
}