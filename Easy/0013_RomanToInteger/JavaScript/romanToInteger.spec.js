const { romanToInt_SwitchCase, romanToInt } = require('./romanToInteger');

test('0013_RomanToInteger # romanToInt "I" equals to 1', () => {
  expect(romanToInt('I')).toBe(1);
});

test('0013_RomanToInteger # romanToInt "III" equals to 3', () => {
  expect(romanToInt('III')).toBe(3);
});

test('0013_RomanToInteger # romanToInt "V" equals to 5', () => {
  expect(romanToInt('V')).toBe(5);
});

test('0013_RomanToInteger # romanToInt "LVIII" equals to 58', () => {
  expect(romanToInt('LVIII')).toBe(58);
});

test('0013_RomanToInteger # romanToInt "MCCCIV" equals to 1304', () => {
  expect(romanToInt('MCCCIV')).toBe(1304);
});

test('0013_RomanToInteger # romanToInt "MCMXCIV" equals to 1994', () => {
  expect(romanToInt('MCMXCIV')).toBe(1994);
});

test('0013_RomanToInteger # romanToInt_SwitchCase "I" equals to 1', () => {
  expect(romanToInt_SwitchCase('I')).toBe(1);
});

test('0013_RomanToInteger # romanToInt_SwitchCase "III" equals to 3', () => {
  expect(romanToInt_SwitchCase('III')).toBe(3);
});

test('0013_RomanToInteger # romanToInt_SwitchCase "V" equals to 5', () => {
  expect(romanToInt_SwitchCase('V')).toBe(5);
});

test('0013_RomanToInteger # romanToInt_SwitchCase "LVIII" equals to 58', () => {
  expect(romanToInt_SwitchCase('LVIII')).toBe(58);
});

test('0013_RomanToInteger # romanToInt_SwitchCase "MCCCIV" equals to 1304', () => {
  expect(romanToInt_SwitchCase('MCCCIV')).toBe(1304);
});

test('0013_RomanToInteger # romanToInt_SwitchCase "MCMXCIV" equals to 1994', () => {
  expect(romanToInt_SwitchCase('MCMXCIV')).toBe(1994);
});
