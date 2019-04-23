'use strict';

class Hedgie{
    sizeinGramms: number;
    nickname: string;
    color: string;

    constructor(sizeinGramms: number = 10, nickname: string = 'kicsisüni', color: string = 'white'){
        this.sizeinGramms = sizeinGramms;
        this.nickname = nickname;
        this.color = color;
    }
    breed(): Hedgie{
        return new Hedgie(123, 'hedgie', 'white');
    }
    poop(){
        console.log('I pooped')
    }
    introduction():string {
        return 'Hi, I am ' + this.nickname;
    }

}

export {Hedgie};