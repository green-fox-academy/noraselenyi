'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)


var greyshade = Math.floor(Math.random()* 255) + 0;

ctx.fillStyle = 'rgb(' + greyshade +', ' + greyshade + ',' + greyshade +')';


for (let i = 1; i <= 5; i++){
    var x = Math.floor((Math.random() * 600) + 1);
    var y = Math.floor((Math.random() * 600) + 1);
    ctx.fillRect(x, y, 30, 30);
}

