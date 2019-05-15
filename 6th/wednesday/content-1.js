'use strict';

const lastone = document.getElementsByClassName('animals');

const ps = document.getElementsByTagName('p');

console.log(ps[0].innerHTML);

for (let i = 0; i < ps.length; i++){
    ps[i].innerHTML = lastone[0].innerText;
}

console.log(ps[0].innerHTML);


for (let i = 0; i < ps.length; i++){
    ps[i].innerHTML = lastone[0].innerHTML;
}