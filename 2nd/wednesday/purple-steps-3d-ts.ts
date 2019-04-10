'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]


var coord = 20;

function biggersquares(size, color){
    ctx.fillStyle = color;
    
    for (let i = 0; i <=120; i+=20){
        ctx.fillRect(coord,coord, size+i, size+i);
        coord += i;

    }
}

biggersquares(0, "purple");


    // ctx.fillRect(20, 20, size, size);
    // ctx.fillRect(40, 40, size+20, size+20);
    // ctx.fillRect(80, 80, size+40, size+40);
    // ctx.fillRect(140, 140, size+60, size+60);
    // ctx.fillRect(220, 220, size+80, size+80);
    // ctx.fillRect(320, 320, size+100, size+100);