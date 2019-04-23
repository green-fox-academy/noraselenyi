'use strict';

class Tree{
    waterAmount : number;
    color: string;
    needsWater: boolean;

    constructor(color:string){
        this.color = color;
        this.waterAmount = 0;
        this.needsWater = true;
    }

    absorb(water:number){
        this.waterAmount += water * 0.4;
    }
    setWaterNeeds(){
        if (this.waterAmount < 10){
            this.needsWater = true;
        } else {
            this.needsWater = false;
        }
    }

}
export {Tree};


// const pipacs = new Tree();

// console.log(pipacs);
// pipacs.absorb(10);
// console.log(pipacs);
