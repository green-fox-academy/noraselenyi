'use strict';

import test from 'tape';
import {Sharpie} from './sharpie';

test('sumOf', t => {
    const operations: Sharpie = new Sharpie('black',5);
    let x: number = operations.inkAmount

    t.equal(x,operations.inkAmount);

    t.end();

});
