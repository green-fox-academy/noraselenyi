import { Plant } from './plants';

class Tree extends Plant{
    public constructor(pColor: string = ''){
        super(10, 0.4, pColor, 'Tree');
    }
    
}

export {Tree};