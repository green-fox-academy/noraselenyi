import { Plant } from './plants';

class Flower extends Plant{
     public constructor(pColor: string = ''){
        super(5, 0.75, pColor, 'Flower');

    }
    
}

export {Flower};