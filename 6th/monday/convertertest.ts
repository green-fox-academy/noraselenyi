'use strict';

import test from 'tape';
import {converter} from './converter';

test ('converter', t => {
    t.equal(converter(12345), 'twelve thousand three houndred fourty five');
    t.end();
});

test ('converter', t => {
    t.equal(converter(34567), 'fourteen thousand five houndred sixty seven');
    t.end();
});