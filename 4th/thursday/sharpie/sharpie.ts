'use strict';

class Sharpie{
    color: string;
    width: number;
    inkAmount: number;

    constructor(
        icolor: string,
        iwidth: number,
        inkAmount:number = 100
    ){
        this.color = icolor;
        this.width = iwidth;
        this.inkAmount = inkAmount;
    }

    use(): void{
        this.inkAmount -= 1;
    }

}

export { Sharpie };

// const newSharipe: Sharpie = new Sharpie('black',5);

// console.log(newSharipe);
// newSharipe.use();
// console.log(newSharipe);