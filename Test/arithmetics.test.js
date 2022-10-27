const {summa, subtract, multiply, divide} = require('./arithmetics');
// YKSILÖTESTIT
test('2 + 3 = 5', () => {
  expect(summa(2,3)).toBe(5);
});
test('5 - 6 = -1', () => {
  expect(subtract(5,6)).toBe(-1);
});
test('3 * 4 = 12', () => {
  expect(multiply(3,4)).toBe(12);
});
test('8 / 4 = 2', () => {
  expect(divide(8,4)).toBe(2);
});
//JOUKKOTESTIT
test.each([[1, 1, 2], [-1, 2, 1], [2, 1, 3]])(
  '%i + %i equals %i', (a,b,expected) => {
    expect(summa(a,b)).toBe(expected);},);
test.each([[1, 1, 0], [-1, 2, -3], [2, 2, 0]])(
  '%i - %i equals %i', (a,b,expected) => {
    expect(subtract(a,b)).toBe(expected);},);
test.each([[1, 1, 1], [-1, 2, -2], [2, 2, 4]])(
  '%i * %i equals %i', (a,b,expected) => {
    expect(multiply(a,b)).toBe(expected);},);
test.each([[1, 1, 1], [-1, 2, -0.5], [2, 2, 1]])(
  '%i / %i equals %i', (a,b,expected) => {
    expect(divide(a,b)).toBe(expected);},);
