'use strict';

import test from 'tape';
import {Animal} from '../../3rd/wednesday/animal';

test('animal', t => {
    const operations: Animal = new Animal('Bunny');
    let hungrybunny: number = operations.hunger;
    operations.eat();
    t.equal(hungrybunny-1,operations.hunger);

    let thirstybunny: number = operations.thirst;
    operations.drink();
    t.equal(thirstybunny-1, operations.thirst);

    let gamebunny: number = operations.hunger;
    operations.play();
    t.equal(gamebunny+1, operations.hunger);

    let gamebunnythirst: number = operations.thirst;
    operations.play();
    t.equal(gamebunnythirst+1, operations.thirst);

    t.end();

});