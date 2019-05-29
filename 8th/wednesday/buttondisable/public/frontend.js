'use strict';

let signup = document.querySelector(".signup")
let catt = document.getElementById('cat')
let doggo = document.getElementById('dog')

// select all with the same name
let fav = document.getElementsByName("fav");
for (let i = 0; i < fav.length; i++){
    fav[i].addEventListener('click', event => {
        if (catt.checked || doggo.checked) {
            signup.disabled = false;
        } else {
            signup.disabled = true;
        }
    });
}
// select 1 with the specific id
let luvcat = document.querySelector(".luvcat");
let yass = document.getElementById("yes");

yass.addEventListener('click', () => {
    luvcat.disabled = false;
});

let nopp = document.getElementById("no");
nopp.addEventListener('click', () => {
    luvcat.disabled = true;
});



let viktor = document.getElementById('Viktor')


nopp.addEventListener('click', () => {
    if (viktor.checked){
        signup.disabled = false;
        alert("Sigh, we still added you to the cat facts list");
    } else {
        alert("Thank you, you've successfully signed up for cat facts");
    }
});


signup.addEventListener('click', () => {
    alert("Thank you, you've successfully signed up for cat facts");
    
});


