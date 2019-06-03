window.onload = () => {
    //let numbersuntileight = Array.from(Array(9).keys());

    let clicks = [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
    ];
    let isitfirst = true;

    let divArray =  document.querySelectorAll(div);

    divArray.forEach((div) => {
        div.addEventListener('click', (event) => {
        if (clicks[event.target.id] === undefined){
            clicks[event.target.id] = isitfirst ? 1: 2;
        }
            //console.log(isitfirst, event.target.id);
            isitfirst = !isitfirst;

        })
    })
}



const wincon = (arrayofelements) => {
    if (vertical(arrayofelements)){
        return vertical(arrayofelements);
    }
    else if(horizontal(arrayofelements)){
        return horizontal(arrayofelements);

    }
    else if (diagonal(arrayofelements)){
        return diagonal(arrayofelements);

    }
   
   

}

const vertical = arrayofelements => {
    if (arrayofelements[0] === arrayofelements[1]=== arrayofelements[2]){
        return arrayofelements[0];
    }
    else if (arrayofelements[3] === arrayofelements[4]=== arrayofelements[5]){
        return arrayofelements[3];
    }
    else if (arrayofelements[6] === arrayofelements[6]=== arrayofelements[8]){
        return arrayofelements[6];
    }
}


const horizontal = (arrayofelements) => {
    if (arrayofelements[0] === arrayofelements[3]=== arrayofelements[6]){
        return arrayofelements[0];
    }
    else if (arrayofelements[1] === arrayofelements[4]=== arrayofelements[7]){
        return arrayofelements[1];
    }
    else if (arrayofelements[2] === arrayofelements[5]=== arrayofelements[8]){
        return arrayofelements[2];
    }
}

const diagonal = (arrayofelements) => {
    if (arrayofelements[0] === arrayofelements[4]=== arrayofelements[8]){
        return arrayofelements[0];
    }
    else if (arrayofelements[2] === arrayofelements[4]=== arrayofelements[6]){
        return arrayofelements[2];
    }

}