const isPalindrome = require('./palindromeNumber');

test('0009_PalindromeNumber # 1 is palindrome', () => {
  expect(isPalindrome(1)).toBeTruthy();
});

test('0009_PalindromeNumber # 11 is palindrome', () => {
  expect(isPalindrome(11)).toBeTruthy();
});

test('0009_PalindromeNumber # 121 is palindrome', () => {
  expect(isPalindrome(121)).toBeTruthy();
});

test('0009_PalindromeNumber # 112211 is palindrome', () => {
  expect(isPalindrome(112211)).toBeTruthy();
});

test('0009_PalindromeNumber # -1 is not palindrome', () => {
  expect(isPalindrome(-1)).toBeFalsy();
});

test('0009_PalindromeNumber # 12 is not palindrome', () => {
  expect(isPalindrome(12)).toBeFalsy();
});