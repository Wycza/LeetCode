# 0009. Palindrome Number

Link: https://leetcode.com/problems/palindrome-number/

Given an integer ```x```, return ```true``` if ```x``` is palindrome integer.

An integer is a **palindrome** when it reads the same backward as forward.

- For example, ```121``` is a palindrome while ```123``` is not.
 

__Example 1:__

```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

__Example 2:__

```
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

__Example 3:__

```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 ```

__Constraints:__

> -2<sup>31</sup> <= x <= 2<sup>31</sup> - 1

__Follow-up__: Could you solve it without converting the integer to a string?