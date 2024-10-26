// calculator.test.js
const stringCalculator = require('./cal');

test('returns 0 for an empty string', () => {
  expect(stringCalculator("")).toBe(0);
});

test('returns the number itself for a single number', () => {
  expect(stringCalculator("5")).toBe(5);
  expect(stringCalculator("10")).toBe(10);
});


  