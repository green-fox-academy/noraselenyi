'use strict';

import {Flower} from './flower';
import {Tree} from './tree';


class Garden{
    plants: any[];

    constructor(){
        this.plants = [];
    }

    addToPlants(toAdd:any){
        this.plants.push(toAdd);
    }

    watering(water:number, plants:any[]){
        let counter = 0;
        for (let i = 0; i < this.plants.length; i++){
            if (this.plants[i].needsWater === true){
                counter ++;
            }
        }
        for (let i = 0; i < plants.length; i++){
            if (plants[i].needsWater === true){
                plants[i].absorb(water/counter);
                plants[i].setWaterNeeds();
        }
    }
    }

    result(){
        for (let i = 0; i < this.plants.length; i++){
            if (this.plants[i].needsWater === true){
                if (this.plants[i]instanceof Flower){
                    console.log('The ' +this.plants[i].color+ ' Flower ' + 'needs water' );
                } else {
                    console.log('The ' +this.plants[i].color+ ' Tree ' + 'needs water' );
                }
            } else {
                if (this.plants[i]instanceof Flower){
                    console.log('The ' +this.plants[i].color+ ' Flower ' + 'doesn\'t need water' );
                } else {
                    console.log('The ' +this.plants[i].color+ ' Tree ' + 'doesn\'t need water' );
                }

            }
        }       
    }

}

const yellowFlower: Flower = new Flower('yellow');
const blueFlower: Flower = new Flower('blue');
const purpleTree: Tree = new Tree('purple');
const orangeTree: Tree = new Tree('orange');
const garden: Garden = new Garden();

garden.addToPlants(yellowFlower);
garden.addToPlants(blueFlower);
garden.addToPlants(purpleTree);
garden.addToPlants(orangeTree);


console.log('original:');
console.log(garden.plants);
console.log('RESULT:');
garden.result()
// console.log('how much water:');
garden.watering(40, garden.plants);
console.log('1st watering:');
console.log(garden.plants);
console.log('RESULT:');
garden.result()

garden.watering(70, garden.plants);
console.log('2nd watering:');
console.log(garden.plants);
console.log('RESULT:');
garden.result()
