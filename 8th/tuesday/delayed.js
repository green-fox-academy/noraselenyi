'use strict';

let butt = document.querySelector('button');

butt.addEventListener('click', (event)=>{
    setTimeout(() => {
    let brandnew = document.createElement('h3');
    brandnew.innerText = 'HAMMER TIME!!';
    document.body.appendChild(brandnew)
    }, 1000);
});