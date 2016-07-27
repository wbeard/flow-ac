// @flow

function add(first: number | string, second: number | string): ?number {
  if(isNaN(Number(first)) || isNaN(Number(second))) {
    return;
  }

  return Number(first) + Number(second);
}

function addAsDollars(first: number | string, second: number | string): string {
  const sum = add(first, second);

  return sum.toLocaleString('us-EN', {
    style: 'currency',
    currency: 'USD'
  });
}
