'use strict';

import {Hedgie} from './hedgie';

class Masni extends Hedgie{

    constructor(){
       super();
        this.sizeinGramms = 280;
        this.color = 'black';
        this.nickname = 'Masni';
    }

}


//let jozsika = new Masni(280, 'Masni', 'brown');       amig nincs constructorban
let jozsika = new Masni()
jozsika.poop();
console.log(jozsika.introduction());