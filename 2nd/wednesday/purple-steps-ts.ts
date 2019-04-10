'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]


function tinysquares(size, color){
    ctx.fillStyle = color;
    for (let i = 20; i <= 400; i+=20){
        ctx.fillRect(i, i, size, size);
    }
}


tinysquares(20, "purple");