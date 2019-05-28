'use strict';



const clickme1 = document.querySelector('.first');


clickme1.addEventListener('click', event => {
    console.log(Math.floor(Date.now() / 1000));
    clickme1.disabled = true;
});



const clickme2 = document.querySelector('.second');

const eventhandler = () => {
    console.log(Math.floor(Date.now() / 1000));
    clickme2.removeEventListener('click',eventhandler);
}

clickme2.addEventListener('click',eventhandler);
