import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

/* Create a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

const firstthing: Thing = new Thing('Get milk');
const secondthing: Thing = new Thing('Remove the obstacles');
const thirdthing: Thing = new Thing('Stand up');
const fourththing: Thing = new Thing('Eat lunch');

thirdthing.complete();
fourththing.complete();

fleet.add(firstthing);
fleet.add(secondthing);
fleet.add(thirdthing);
fleet.add(fourththing);

function print(){
    for (let i = 0; i < 4; i++){
        if (fleet.getThings()[i].getCompleted() === true){
            console.log((i+1)+ ".", "[X]", fleet.getThings()[i].getName());
        } else{
            console.log((i+1)+ ".", "[ ]", fleet.getThings()[i].getName());
        }

    }
}

print();
