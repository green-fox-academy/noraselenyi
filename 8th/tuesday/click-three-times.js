'use strict';

let button = document.querySelector('button');
let counter = 0;

window.onload = () => {
    button.addEventListener('click', (event)=>{
        counter ++;
        console.log(counter)
    });
    setTimeout(() => {
        if (counter >= 3){
            let thingie = document.createElement('h3');
            thingie.textContent ='5 seconds elapsed and clicked 3 times';
            document.body.appendChild(thingie);
        }
    }, 5000);
}




