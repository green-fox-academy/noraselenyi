'use strict';

import test from 'tape';
import {Sharpie} from './sharpie';

test('sumOf', t => {
    const operations: Sharpie = new Sharpie('black',7);
    let x: number = operations.inkAmount
    operations.use()
    t.equal(x-1,operations.inkAmount);
    t.end();

});
