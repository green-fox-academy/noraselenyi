// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one


'use strict';

class Animal{
    name: string;
    hunger: number;
    thirst: number;

    constructor(name: string){
        this.name = name;
        this.hunger = 50;
        this.thirst = 50;
    }
    
    eat(){
        if (this.hunger >0){
            this.hunger -= 1;
        } else {
            console.log('Oh no poor bunny');
        }
    }

    drink(){
        if (this.thirst >0){
            this.thirst -= 1;
        } else {
            console.log('Oh no poor bunny');
        }
    }

    play(){
        if (this.hunger >0 && this.thirst >0){
            this.hunger += 1;
            this.thirst += 1;
        } else {
            console.log('Oh no poor bunny');
        }
    }

}
export { Animal };
const Bunny: Animal = new Animal('Bunny');

// Bunny.eat();
// console.log(Bunny);
// Bunny.drink();
// console.log(Bunny);
// Bunny.play();
// console.log(Bunny);