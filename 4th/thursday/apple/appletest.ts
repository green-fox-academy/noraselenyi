'use strict';

import test from 'tape';
import {Apple} from './apple';


test('getting apples', t => {
    const operations = new Apple();

    const actual:string = operations.getApple('apple');
    const expected:string = 'apple';

    t.equal(actual, expected);
    t.end();


});
  