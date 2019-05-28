'use strict';


const result = document.querySelector('.result');
const lis = document.querySelector('ul').children;

let counter = 0;
for (let i = 0; i < lis.length; i++){
    counter ++
};

const thismany = document.querySelector('button');

thismany.addEventListener('click', (event)=>{
    result.innerHTML = counter;
});


