'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.


function square(size){
    if (size === 400){
        ctx.fillStyle = "blue";        
    } else if (size === 300){
        ctx.fillStyle = "red";        
    } else if (size === 200){
        ctx.fillStyle = "green";        
    } else {
        ctx.fillStyle = "purple";        
    }
    ctx.fillRect((300-size/2),(300-size/2), size, size);  
}

square(400);
square(300);
square(200);
square(100);