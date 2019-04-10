
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.


function checkerboard(size){
    ctx.fillStyle = 'black';

    for (let i = 0; i <=600; i+=size){
        ctx.fillRect(i, i, size, size);
        
        ctx.fillRect(i+2*size, i, size, size);
        ctx.fillRect(i+4*size, i, size, size);

        ctx.fillRect(i-2*size, i, size, size);
        ctx.fillRect(i-4*size, i, size, size);
    }

}

checkerboard(120);
