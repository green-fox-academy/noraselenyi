'use strict';

class Flower{
    waterAmount : number;
    color: string;
    needsWater: boolean;

    constructor(color: string){
        this.color = color;
        this.waterAmount = 0;
        this.needsWater = true;
    }

    absorb(water:number){
        this.waterAmount += water * 0.75;
    }
    setWaterNeeds(){
        if (this.waterAmount < 5){
            this.needsWater = true;
        } else {
            this.needsWater = false;
        }
    }

}
export {Flower};
// const pipacs = new Flower();

// console.log(pipacs);
// pipacs.absorb(10);
// console.log(pipacs);
