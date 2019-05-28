'use strict';

const cica = document.querySelector('.cica');


cica.onclick = () => {
    console.log('hello, onclick')
};
// az utolsó ONCLICK felülírja a többit, nem használjuk
// cica.onclick = () => {
//     console.log('tsa')
// };


// legalább 2 fontos paraméter: amikor, ami
// ADDEVENTLISTENER mindet kiírja
kutya.addEventListener('click', ()=>{
    console.log('kutya');
})

kutya.addEventListener('click', ()=>{
    console.log('alma');
})


const eventHandler = (event) => {
    console.log(event);
}
// megjelnik minden, event tartalmaz mindent az eventről
//kutya.onclick = eventHandler;

kutya.addEventListener('click',eventHandler);
//onclickét nem lehet törölni
kutya.removeEventListener('click',eventHandler);


document.body.addEventListener('keydown', (event) => {
    console.log('event', event);
    if (event.keyCode === 32){
        console.log('YOOOOOO SPACE');
    }
});

const bubbling = document.querySelector('.bubbling');

bubbling.addEventListener('click', (event)=>{
    //console.log(event)
    //rconsole.log(event.target)
    //console.log(event.target.dataset.id)
    console.log(event.target.dataset)
})

// dataset - ezzel tudunk html-be ágyazni dolgokat, létrehoz egy objectet (data-id)
// unique 