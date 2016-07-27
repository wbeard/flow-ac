// @flow

function add(first: number, second: number): ?number {
  if(isNaN(first) || isNaN(second)) {
    throw new Error('Not a number');
  }

  return first + second;
}

function addAsDollars(first: number, second: number): string {
  const sum = add(1, 2);

  return `$${sum}`.toLocaleString('us-EN', {
    style: 'currency',
    currency: 'USD'
  });
}
