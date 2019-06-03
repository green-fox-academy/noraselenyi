const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo11&api-key=SqZuP7Uv6hLt3oyvjPqXDLgC9kELBFGP';
const xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.send();

xhr.onload = (data) => {
    let imgurl= JSON.parse(data.target.response)
    // for (let i = 0; i < imgurl.length; i++){

    //     const kickers = document.createElement('h2');
    //     kickers.textContent = imgurl[i].headline.kicker

    //     const mains = document.createElement('h3');
    //     mains.textContent = imgurl[i].headline.main

    //     const snippets = document.createElement('p');
    //     snippets.textContent = imgurl[i].snippet        

    //     const pub_date = document.createElement('p');
    //     pub_date.textContent = imgurl[i].pub_date

    //     document.getElementsByTagName('body')[0].appendChild(kickers);
    //     document.getElementsByTagName('body')[0].appendChild(mains);
    //     document.getElementsByTagName('body')[0].appendChild(snippets);
    //     document.getElementsByTagName('body')[0].appendChild(pub_date);
        
    //}
}
