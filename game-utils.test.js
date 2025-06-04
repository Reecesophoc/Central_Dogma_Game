import assert from 'assert';
import { shuffle } from './game-utils.js';

const original = [1, 2, 3, 4, 5];
const result = shuffle([...original]);

assert.strictEqual(result.length, original.length, 'Length should be unchanged');
assert.deepStrictEqual(result.slice().sort(), original.slice().sort(), 'Shuffled array should contain same elements');
console.log('All tests passed');

