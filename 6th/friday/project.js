const pictures = ['0.jpg', '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg'];

let picnumber = 0;
let bigpic = document.getElementsByClassName('bigpicture')[0];
let newpic = document.createElement('img');
newpic.setAttribute('src', '0.jpg');
bigpic.appendChild(newpic);

const change = (event) => {
    newpic.setAttribute('src', event.target.src);
}


function change(event) {
    newpic.setAttribute('src', event.target.src);
}




for (let i= 0; i < pictures.length; i++){
    let pic = document.createElement('img');
    pic.setAttribute('src', pictures[i]);
    pic.addEventListener('click', change);
    pic.setAttribute('class', 'pics');
    document.getElementsByClassName('pictures')[0].appendChild(pic);
}

function setpic(){
    if (picnumber === 8){
        picnumber = 0;
    } else if (picnumber < 0){
        picnumber = 7;
    }
    newpic.setAttribute('src', pictures[picnumber]);
}

const goright = ()=> {
    picnumber ++
    setpic();
}

const goleft = ()=> {
    picnumber --
    setpic();
}