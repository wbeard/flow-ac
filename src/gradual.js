// @flow

// Annotated
const add = (first: number, second: number): ?number => {
  if(isNaN(first) || isNaN(second)) {
    throw new Error('Not a number');
  }

  return first + second;
}

// Not annotated
// What's missing? Use flow coverage; flow suggest;
const subtract = (first, second) => first - second;

function addOneAndTwo() {
  const firstAnswer = add(1, 2);

  return `${firstAnswer}`;
}
