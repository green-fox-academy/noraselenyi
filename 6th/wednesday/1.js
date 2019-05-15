'use strict';

// 1.

const king = document.getElementById('b325');
console.log(king.innerText);

// 2.
const businessLamp = document.getElementsByClassName('big');
// console.log(businessLamp[0].innerHTML);
// console.log(businessLamp[1].innerHTML);
console.log(businessLamp[0].innerText);

// 3.
const conceitedKing = document.getElementsByClassName('container');
alert(conceitedKing[0].innerText);

// 4. 
const noBusiness = document.getElementsByTagName('div')
console.log(noBusiness[0].innerText);
console.log(noBusiness[1].innerText);
console.log(noBusiness[2].innerText);