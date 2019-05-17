const pictures = ['0.jpg', '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg'];

{/* <img src="ht"> */}


for (let i= 0; i < pictures.length; i++){
    let pic = document.createElement('img');
    pic.setAttribute('src', pictures[i]);
    pic.setAttribute('class', 'pics');
    document.getElementsByClassName('pictures')[0].appendChild(pic);
}
