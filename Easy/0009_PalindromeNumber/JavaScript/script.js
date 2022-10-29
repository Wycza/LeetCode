/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  const text = x.toString();

  for (let i = 0; i < text.length / 2; i++) {
    if (text[i] !== text[text.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome(1) === true);
console.log(isPalindrome(11) === true);
console.log(isPalindrome(121) === true);
console.log(isPalindrome(112211) === true);

console.log(isPalindrome(-1) === false);
console.log(isPalindrome(12) === false);
