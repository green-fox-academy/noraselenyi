'use strict';


let url = 'http://localhost:3001/posts';
const xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.send();


xhr.onload = result => {
    let tadam = JSON.parse(result.target.response);
    let posts = document.createElement('div');
    posts.setAttribute('class', 'posts');
    for (let i = 0; i <tadam.length; i++){
        let box = document.createElement('div');
        box.setAttribute('class', 'boxes');

        let ids = document.createElement('h1');
        ids.textContent = tadam[i].id;
        box.appendChild(ids);

        let scores = document.createElement('h3');
        scores.textContent = tadam[i].score;
        box.appendChild(scores);

        let date = document.createElement('h4');
        date.textContent = tadam[i].timest;
        box.appendChild(date);        

        let titles = document.createElement('h2');
        titles.textContent = tadam[i].title;
        box.appendChild(titles); 

        let urls = document.createElement('h3');
        urls.textContent = tadam[i].url;
        box.appendChild(urls); 

        posts.appendChild(box)
        document.getElementsByTagName('body')[0].appendChild(posts);

        console.log(tadam[i].title)

    }


}

