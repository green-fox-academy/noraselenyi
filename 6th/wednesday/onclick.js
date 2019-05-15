const button = document.querySelector('button');

button.onclick = () => {
    let body = document.getElementsByTagName('body')[0]
    let isit = body.getAttribute('class');
    if (isit){
        body.removeAttribute('class')
    } else {
        body.setAttribute('class', 'party');
    }
};