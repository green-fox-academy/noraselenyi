'use strict';

import test from 'tape';
import {countLetters} from './letters';

test('countletters', t => {
    t.deepEqual(countLetters('anna'), {'a':2, 'n':2});
    t.end();
});

