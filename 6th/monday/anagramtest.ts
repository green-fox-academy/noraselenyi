'use strict';

import test from 'tape';
import {anagram} from './anagramkata';

test ('index', t => {
    t.equal(anagram('leel', 'elel'), true);
    t.end();
});

test ('index', t => {
    t.equal(anagram('kalap', 'alap'), false);
    t.end();
});
