// @flow

function add(first: number, second: number): ?number {
  if(isNaN(first) || isNaN(second)) {
    throw new Error('Not a number');
  }

  return first + second;
}

function addOneAndTwo(): string {
  const firstAnswer = add(1, 2);

  return firstAnswer ? `${firstAnswer}` : null;
}
