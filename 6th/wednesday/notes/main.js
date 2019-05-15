'use strict';

// const genericWelcomeMessage = document.getElementsByClassName('message');
// console.log(genericWelcomeMessage);

// const article = document.getElementsByTagName('article');
// console.log(article[0].innerHTML);
// console.log(article[0].innerText);
// console.log(typeof article[0].innerText);


// const article = document.getElementsByTagName('article')[1];
// article.innerText ='woo';


// const div = document.getElementsByTagName('div');
// console.log(div);
// console.log(div[0].parentElement.innerHTML);


// const giveBirth = ()=> {
//     const mainContent = document.createElement('div');
//     mainContent.innerHTML ='<h1>WHAAAATTT</h1>';
//     document.body.appendChild(mainContent);
// }



// const possibleLunchOptions = ['meki', 'pulitzer', 'four seasons', 'saigon', 'vinvin', 'bellozzo']
// const giveMePlace = ()=> {
//     const myLunchPlace = document.createElement('h1');
//     myLunchPlace.textContent = possibleLunchOptions[Math.floor(Math.random() * possibleLunchOptions.length)]
//     document.body.appendChild(myLunchPlace);
// }


const possibleLunchOptions = ['meki', 'pulitzer', 'four seasons', 'saigon', 'vinvin', 'bellozzo']
const myLunchPlace = document.createElement('h1');
document.body.appendChild(myLunchPlace);
myLunchPlace.textContent = '';
const giveMePlace = ()=> {
    myLunchPlace.textContent = possibleLunchOptions[Math.floor(Math.random() * possibleLunchOptions.length)]
}


const iDontLikeThisPlace = ()=> {
    document.body.removeChild(myLunchPlace);
}


const modifyClassListofTitle = ()=>{
    const mainTitle = document.body.querySelector('h1');
    console.log(mainTitle.classList);
    mainTitle.classList.add('cica');
    console.log(mainTitle.classList);

}


