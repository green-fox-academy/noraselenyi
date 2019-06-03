const fox = document.createElement('li');
const textfox = document.createTextNode('The Green Fox');
fox.appendChild(textfox);
document.getElementsByTagName('ul')[0].appendChild(fox);


const lighter = document.createElement('li');
const textlighter = document.createTextNode('The Lamplighter');
lighter.appendChild(textlighter);
document.getElementsByTagName('ul')[0].appendChild(lighter);


let cont = document.getElementsByClassName('container')[0];
cont.innerText = 'I can add elements to the DOM!';

console.log(cont);
const img = document.createElement('img');
img.setAttribute('src','https://pbs.twimg.com/profile_images/694269934873006080/ICC0FtWn_400x400.jpg');
cont.appendChild(img)
console.log(cont);

