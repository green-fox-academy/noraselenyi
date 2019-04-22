//Reuse your Sharpie class
// Create SharpieSet class
// - it contains a list of Sharpie
// - countUsable() -> sharpie is usable if it has ink in it
// - removeTrash() -> removes all unusable sharpies

import { Sharpie } from '../wednesday/sharpie'

class SharpieSet{
    content: Sharpie[];

    constructor(sharpietoset: any[]){
        this.content = sharpietoset;
    }

    addToSet(sharpie: Sharpie): void{
        this.content.push(sharpie);
    }

    countUsable(){
        let useable: number = 0;
        for (let i = 0; i < sharpieset.content.length; i++){
            if (sharpieset.content[i].inkAmount >= 1){
                useable ++;
            }
        }
        return useable;
    }

    removeTrash(){
        for (let i = 0; i < sharpieset.content.length; i++){
            if (sharpieset.content[i].inkAmount === 0){
                sharpieset.content.splice(i,1);
            }
        }
    }

}


const newSharipe2: Sharpie = new Sharpie('black',5, 50);
const newSharipe3: Sharpie = new Sharpie('black',5, 0);
const newSharipe4: Sharpie = new Sharpie('black',5, 20);

const sharpieset: SharpieSet = new SharpieSet([]);

sharpieset.addToSet(newSharipe2);
sharpieset.addToSet(newSharipe3);
sharpieset.addToSet(newSharipe4);
console.log(sharpieset);


console.log(sharpieset.countUsable() + ' is still useable')


sharpieset.removeTrash();
console.log(sharpieset);
