/**
 * Time complexity O(n2)
 * @param {number[]} nums - array of integers
 * @param {number} target - integer
 * @return {number[]} - two numbers such that they add up to target
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};


// Example 1:
console.log(twoSum([2, 7, 11, 15], 9).toString() == [0, 1].toString());

// Example 2:
console.log(twoSum([3, 2, 4], 6).toString() == [1, 2].toString());

// Example 3:
console.log(twoSum([3, 3], 6).toString() == [0, 1].toString());


// -----------------------------------------


/**
 * Improved version with time complexity O(n).
 *  
 * Example:
 * 
 *     Input: nums = [3,2,4], target = 6
 *     Output: [1,2]
 * 
 * In each iteration we calculate the difference between target and given number.
 * If such difference does not exist in the map<key,value> then we put it into the map with key as a value 
 * from the current iteration and we hold the index of the iteration as a value.
 * 
 *     6 - 3 = 3 => map[3] does not exist in the map => we put map[3] = 0
 *     6 - 2 = 4 => map[4] does not exist in the map => we put map[2] = 1
 *     6 - 4 = 2 => map[2] does exist in the map => 
 * 
 * We know that map[2] equals to 2 and current value is equal to 4. 
 * When both added then we have same value as target. 
 * We also know that map[2] holds the first index and second index is taken from the loop.
 * 
 * @param {number[]} nums - array of integers
 * @param {number} target - integer
 * @return {number[]} - two numbers such that they add up to target
 */
const twoSum_better = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {

    const diff = target - nums[i];

    // We need to compare it also against 0 because map[n] = 0 would be false.
    if (map[diff] >= 0) {
      return [map[diff], i];
    } else {
      map[nums[i]] = i;
    }
  }
};


// Example 1:
console.log(twoSum_better([2, 7, 11, 15], 9).toString() == [0, 1].toString());

// Example 2:
console.log(twoSum_better([3, 2, 4], 6).toString() == [1, 2].toString());

// Example 3:
console.log(twoSum_better([3, 3], 6).toString() == [0, 1].toString());
