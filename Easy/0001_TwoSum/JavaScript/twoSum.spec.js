const { twoSum, twoSum_map } = require('./twoSum');

test('0001_TwoSum # twoSum [2, 7, 11, 15], 9 equals to [0, 1]', () => {
  const input = [2, 7, 11, 15];
  const expectedOutput = [0, 1];

  expect(twoSum(input, 9).toString()).toBe(expectedOutput.toString());
});

test('0001_TwoSum # twoSum [3, 2, 4], 6 equals to [1, 2]', () => {
  const input = [3, 2, 4];
  const expectedOutput = [1, 2];

  expect(twoSum(input, 6).toString()).toBe(expectedOutput.toString());
});

test('0001_TwoSum # twoSum [3, 3], 6 equals to [0, 1]', () => {
  const input = [3, 3];
  const expectedOutput = [0, 1];

  expect(twoSum(input, 6).toString()).toBe(expectedOutput.toString());
});

test('0001_TwoSum # twoSum_map [2, 7, 11, 15], 9 equals to [0, 1]', () => {
  const input = [2, 7, 11, 15];
  const expectedOutput = [0, 1];

  expect(twoSum_map(input, 9).toString()).toBe(expectedOutput.toString());
});

test('0001_TwoSum # twoSum_map [3, 2, 4], 6 equals to [1, 2]', () => {
  const input = [3, 2, 4];
  const expectedOutput = [1, 2];

  expect(twoSum_map(input, 6).toString()).toBe(expectedOutput.toString());
});

test('0001_TwoSum # twoSum_map [3, 3], 6 equals to [0, 1]', () => {
  const input = [3, 3];
  const expectedOutput = [0, 1];

  expect(twoSum_map(input, 6).toString()).toBe(expectedOutput.toString());
});