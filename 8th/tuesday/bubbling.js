'use strict';


const nav = document.querySelector('nav');
const pic = document.getElementsByClassName("img-inspector")[0];


let y = 0;
let x = 0;
let size = 200;

nav.addEventListener('click', (event)=>{
    if (event.target.dataset.direction === 'up'){
        y -= 10;
        pic.style.backgroundPositionY = `${y}px`;
    }
    if (event.target.dataset.direction === 'down'){
        y += 10;
        pic.style.backgroundPositionY = `${y}px`;
    }
    if (event.target.dataset.direction === 'right'){
        x += 10;
        pic.style.backgroundPositionX = `${x}px`;
    }
    if (event.target.dataset.direction === 'left'){
        x -= 10;
        pic.style.backgroundPositionX = `${x}px`;
    }
    if (event.target.dataset.direction === 'out'){
        size *= 0.8;
        pic.style.backgroundSize = `${size}%`;
    }
    if (event.target.dataset.direction === 'in'){
        size *= 1.2;
        pic.style.backgroundSize = `${size}%`;
    }
});
