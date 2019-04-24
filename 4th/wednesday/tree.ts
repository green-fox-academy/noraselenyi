import { Plant } from './plants';

class Tree extends Plant{
    public constructor(){
        super()
        this.criticalWaterLevel = 10;
        this.absorb = 0.4;
    }
    
}

export {Tree};