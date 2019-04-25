'use strict';

import test from 'tape';
import {anagrams} from './anagram';

test('anagram', t => {
    t.equal(anagrams('anna', 'anna'), true);
    t.end();
});

