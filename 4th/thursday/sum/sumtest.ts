'use strict';

import test from 'tape';
import {Sum} from './sum';

test('sumOf', t => {
    const operations: Sum = new Sum();
    const newlist: number[] = [];
    const newlist2: number[] = [1];
    const newlist3: number[] = [1,2,3];

    t.equal(operations.sum(newlist),0);
    t.equal(operations.sum(newlist2),1);
    t.equal(operations.sum(newlist3),6);
    
    t.end();

});