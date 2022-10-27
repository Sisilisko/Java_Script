const { add, laske } = require('./script');
// YKSILÖTESTIT
test('get 2 and return 2', () => {
  expect(add(2)).toBe(2);
});

test('use jsdom in this test file', () => {
  const startNumber = '3+4';
  expect(laske()).toBe(7);
});
