import { Garden } from './garden';                       //plantet már ebbe importáltuk
import { Flower } from './flower';
import { Tree } from './tree';


const myGarden: Garden = new Garden();
myGarden.addPlant(new Flower('yellow'));
myGarden.addPlant(new Flower('blue'));
myGarden.addPlant(new Tree('purple'));
myGarden.addPlant(new Tree('orange'));

myGarden.printStatus();

myGarden.waterAllPlants(40);
myGarden.printStatus();

myGarden.waterAllPlants(70);
myGarden.printStatus();