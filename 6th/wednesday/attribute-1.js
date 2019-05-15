const pic = document.getElementsByTagName('img')[0];

// console.log(pic.src)
//console.log(pic.getAttribute('src'))

pic.setAttribute('src', 'https://cdn6.aptoide.com/imgs/d/7/8/d78f79d1e9d17f6c4f70b1dcdfdb394b_icon.png?w=256')

const fox = document.getElementsByTagName('a')[0];
console.log(fox.getAttribute('href'))

fox.setAttribute('href', 'https://greenfoxacademy.com');
fox.innerText = 'Greenfox';

const todisable = document.getElementsByClassName('this-one')[0];
//console.log(todisable)

todisable.disabled = true;
todisable.innerHTML = 'Cant touch this';