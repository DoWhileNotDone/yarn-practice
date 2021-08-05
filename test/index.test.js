import test from 'ava';
import reverser from '../src/index.js';

// const test = require('ava');
// const reverser = require('../src/index.js');

test('reverse', t => {
    t.is(reverser('hello'), 'olleh', 'The strings to not match');
    t.is(reverser('goodbye'), 'eybdoog', 'The strings to not match');
});