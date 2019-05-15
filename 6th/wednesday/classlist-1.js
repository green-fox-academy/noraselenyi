// if ()
const len = document.getElementsByTagName('p').length;
const items = document.getElementsByTagName('p');
const lastclass = items[len-1].getAttribute('class');

if (lastclass === 'dolphin'){
    const apple = document.getElementsByClassName('apple')[0];
    apple.innerHTML = 'pear'
    console.log(items[0].innerText)
}



const first = items[0].getAttribute('class');

if (first === 'apple'){
    const cat = document.getElementsByClassName('cat')[0];
    cat.innerText = 'dog';
    console.log(cat.innerText)
}



const apple = document.getElementsByClassName('apple')[0];
//apple.setAttribute('class', 'apple red');
apple.classList.add('red')
console.log(apple)


const balloon = document.getElementsByClassName('balloon')[0];
balloon.style.borderRadius = 0;
console.log(balloon)