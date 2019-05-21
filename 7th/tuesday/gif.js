for (let i = 1; i <= 16; i++){
    let url = 'http://api.giphy.com/v1/gifs/random?api_key=ZOoFqZXMR85CWSRiMDZWeRWQiKu237Xl';

    const wertz = new XMLHttpRequest();
    wertz.open('GET', url, true);
    wertz.send();

    //console.log(data.target.response);  ----> json to use

    wertz.onload = data => {
        let imgurl= JSON.parse(data.target.response).data.images.fixed_height.url;
        const pic = document.createElement('img');
        pic.setAttribute('src', imgurl)
        document.getElementsByTagName('body')[0].appendChild(pic);
    }
};






