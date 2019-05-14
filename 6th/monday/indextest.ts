'use strict';

import test from 'tape';
import {index} from './indexkata';

test ('index', t => {
    t.equal(index([2,3,4], 4), 2);
    t.end();
});

test ('index', t => {
    t.equal(index([2,3,4], 5), -1);
    t.end();
});

