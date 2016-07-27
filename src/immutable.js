// @flow
import { List, Map } from 'immutable';

function getFromMap(m: Map<>, key: string): ?any {
  return m.get(key);
}

//
// Object !== Map
const obj = { foo: 'bar' };
const bar = getFromMap(obj, 'bar');
