// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal


import { Animal } from '../wednesday/animal';

class Farm{
    animals: Animal[];
    free_places: number;

    constructor(farmanimals: any[]){
        this.animals = farmanimals;
        this.free_places = 10;
    }

    getTypes(){
        console.log('\nThere lives:');
        for (let i =0; i < this.animals.length; i++){
            console.log(this.animals[i].name);
        }
    }
    
    addToFarm(animal: Animal): void{
        this.animals.push(animal);
        this.free_places -= 1;
    }

    breed(){
        let ilength = this.free_places;
        for (let i = 0; i < ilength; i++){
            const newborn: Animal = new Animal('newborn');
            newFarm.addToFarm(newborn);
        }
    }

    slaughter(){
        let howHungry = 50;
        for (let i = 0; i < this.animals.length; i++){
            if (this.animals[i].hunger < howHungry){
                howHungry = this.animals[i].hunger;
            }
        }
        console.log('The least hungry is this hungry:', howHungry);
        for (let j = 0; j < this.animals.length; j++){
            if (this.animals[j].hunger === howHungry){
                newFarm.animals.splice(j,1);
                this.free_places += 1;
            }
        }
        console.log('So it left to play:', newFarm);

    }
}

const newFarm: Farm = new Farm([]);

const chicken: Animal = new Animal('chicken');
const hopper: Animal = new Animal('hopper');
const doggo: Animal = new Animal('doggo');
const kitty: Animal = new Animal('kitty');

newFarm.addToFarm(chicken);
newFarm.addToFarm(hopper);
newFarm.addToFarm(doggo);
newFarm.addToFarm(kitty);


newFarm.getTypes();
console.log('\nOriginal animals are: ' , newFarm);

newFarm.breed();
console.log('\nNow the animals are: ' , newFarm);

chicken.eat();
console.log('\nChicken now ate, so it is not that hungry: ', chicken);

console.log('\nNow the situation is: ' , newFarm);

newFarm.slaughter();