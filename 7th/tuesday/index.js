for (let i= 2; i <= 100; i++){
    let divs = document.createElement('div');
    divs.textContent = i;
    document.getElementsByTagName('section')[0].appendChild(divs)
};


function isPrime(num){
    for (let i = 2; i < num; i++){
        if (num % i === 0){
            return false;
        }
    }return num > 1;
}


function whaaaat(){
    let st1 = document.getElementsByTagName('section')[0]
    for (let i = 0; i < st1.children.length; i++){
        if (i === st1.children.length){
            clearTimeout(prime);
            clearTimeout(notprime);
        }
        else if (isPrime(st1.children[i].innerHTML)){
            let prime = setTimeout(() => {
                st1.children[i].setAttribute('class', 'prime')
            }, i*100);
        }
        else {
            let notprime = setTimeout(() => {
                st1.children[i].setAttribute('class', 'not-prime')
            }, i*100);
        }   
    }
};

whaaaat();


