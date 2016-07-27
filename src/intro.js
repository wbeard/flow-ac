// @flow

function add(first: number, second: number): number {
  return first + second;
}
// No errors
const firstAnswer = add(1, 2);

// Errors
const secondAnswer: string = add("1", "2");

function stringToNumber(str: string): number {
  return Number(str);
}

// Type inference
const coerecedString = stringToNumber(firstAnswer);
