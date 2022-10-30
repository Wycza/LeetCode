/**
 * Switch/case method
 * @param {string} s Roman number
 * @return {number} Integer
 */
const _romanToInt = function (s) {
  let output = 0;

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'I':
        output += 1;
        continue;
      case 'V':
        output += 5;
        if (i > 0 && s[i - 1] == 'I') {
          output -= 2;
        }
        continue;
      case 'X':
        output += 10;
        if (i > 0 && s[i - 1] == 'I') {
          output -= 2;
        }
        continue;
      case 'L':
        output += 50;
        if (i > 0 && s[i - 1] == 'X') {
          output -= 20;
        }
        continue;
      case 'C':
        output += 100;
        if (i > 0 && s[i - 1] == 'X') {
          output -= 20;
        }
        continue;
      case 'D':
        output += 500;
        if (i > 0 && s[i - 1] == 'C') {
          output -= 200;
        }
        continue;
      case 'M':
        output += 1000;
        if (i > 0 && s[i - 1] == 'C') {
          output -= 200;
        }
        continue;
    }
  }

  return output;
};

/**
 * Hash map method
 * @param {string} s Roman number
 * @return {number} Integer
 */
const romanToInt = function (s) {
  const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  let output = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = romanMap[s[i]];
    const next = romanMap[s[i + 1]];

    if (next > curr) {
      output += (next - curr);
      i++;
    } else {
      output += curr;
    }
  }

  return output;
};


console.log(romanToInt('I') === 1);
console.log(romanToInt('III') === 3);
console.log(romanToInt('V') === 5);
console.log(romanToInt('LVIII') === 58);
console.log(romanToInt('MCCCIV') === 1304);
console.log(romanToInt('MCMXCIV') === 1994);
