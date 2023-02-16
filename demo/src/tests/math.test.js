const { sum, multiply, divide } = require('../02-math');

test('1 + 2 should be 3 ', () => {
  const res = sum(1, 2);
  expect(res).toBe(3);
});

test('2 * 3 should be 6', () => {
  const res = multiply(2, 3);
  expect(res).toBe(6);
});

test('3 * 0 should be 0 and 0 * 3 should be 0', () => {
  const res = multiply(3, 0);
  expect(res).toBe(0);
  const res2 = multiply(0, 3);
  expect(res2).toBe(0);
});

test('should divide', () => {
  const res = divide(6, 2);
  expect(res).toBe(3);
  const res2 = divide(5, 2);
  expect(res2).toBe(2.5);
});

test('should divide by zero', () => {
  const res = divide(0, 0);
  expect(res).toBeNull();
  const res2 = divide(6, 0);
  expect(res2).toBeNull();
});
