// Find the HTML skeleton of the game in the candy game folder.

// Gather 10.000 candies!
// Clicking the ‘Create candies’ button gives you 1 candy.
// You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// 10 lollipops generate 1 candy per second.
// Use the 🍭 emoji to display the lollipops you have
// Display the candy producton rate in the Candies / Second row
// If you press the "make candy rain" button, the candy generation should speed up 10x

'use strict';

const addCandy = document.getElementsByClassName("create-candies")[0];
const candies = document.getElementsByClassName("candies")[0]
console.log(candies.textContent)

let candienum = 99;
candies.textContent = candienum;
console.log(candienum)

console.log(addCandy);

addCandy.addEventListener('click', (event)=> {
    candienum ++;
    candies.textContent = candienum;
});


const buylolly = document.getElementsByClassName("buy-lollypops")[0];
const lollies = document.getElementsByClassName("lollypops")[0];
console.log(lollies)
console.log()

buylolly.addEventListener('click', (event)=>{
    candienum -= 100;
    if (candienum <= 0){
        alert("damn, you're out of candies :( ")}
    lollies.textContent += '🍭';
});


setInterval(() => addCandy.click(),1000);


// function makecandides (){
//     setTimeout(() => {
//         candienum ++;
//         candies.textContent = candienum;
//         }, 1000);
// }
// makecandies()


// butt.addEventListener('click', (event)=>{
//     setTimeout(() => {
//     let brandnew = document.createElement('h3');
//     brandnew.innerText = 'HAMMER TIME!!';
//     document.body.appendChild(brandnew)
//     }, 1000);
// });


// document.body.addEventListener('keydown', (event)=>{
//     console.log(event);
//     lastkey.innerHTML = "Last pressed key code is: " + event.keyCode;
//     newstuff.innerHTML = 'And the key is: ' + event.key;
//     document.body.appendChild(newstuff);
// })