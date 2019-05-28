'use strict';


const lastkey = document.querySelector('h1')
const newstuff = document.createElement('h1');

document.body.addEventListener('keydown', (event)=>{
    console.log(event);
    lastkey.innerHTML = "Last pressed key code is: " + event.keyCode;
    newstuff.innerHTML = 'And the key is: ' + event.key;
    document.body.appendChild(newstuff);
})