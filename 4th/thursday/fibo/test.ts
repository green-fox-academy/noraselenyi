'use strict';

import test from 'tape';
import {fibo} from './fibo';

test('fibonacci', t => {
    t.equal(fibo(6), 8);
    t.end();
});

