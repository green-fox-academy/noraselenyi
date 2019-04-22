// create Sharpie class
// We should know about each sharpie their color (which should be a string), 
//width (which will be a floating point number), 
//inkAmount (another floating point number)

// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

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

const newSharipe: Sharpie = new Sharpie('black',5, 30);

console.log(newSharipe);
newSharipe.use();
console.log(newSharipe);