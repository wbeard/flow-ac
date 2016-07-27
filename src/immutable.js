// @flow
import { List, Map } from 'immutable';

function getFromMap(m: Map<>, key: string): ?any {
  return m.get(key);
}

//
// Object !== Map
const obj = { foo: 'bar' };
const bar = getFromMap(obj, 'bar');

//
// Union & Intersection Types
function sum(l: List<number> | Array<number>): number {
  return l.reduce((sum, num) => num + sum, 0);
}

const numbersList = List([1, 2, 3]);
const numbers = [1, 2, 3];
const listSum = sum(numbersList);
const arrSum = sum(numbers);
