const stuff = ['apple', 'banana', 'cat', 'dog'];
const replace = document.getElementsByTagName('li');

console.log(replace[0].innerHTML)

for (let i = 0; i < replace.length; i++){
    replace[i].innerHTML = stuff;
}
console.log(replace[0].innerHTML)
