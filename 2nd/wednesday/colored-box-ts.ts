'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.moveTo(200, 200);
ctx.strokeStyle = 'red';
ctx.lineTo(400, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 200);
ctx.strokeStyle = 'green';
ctx.lineTo(400, 400);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 400);
ctx.strokeStyle = 'yellow';
ctx.lineTo(200, 400);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 400);
ctx.strokeStyle = 'blue';
ctx.lineTo(200, 200);
ctx.stroke();
