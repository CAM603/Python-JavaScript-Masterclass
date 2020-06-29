# Problem Solving Patterns

-   Frequency Counter
-   Multiple Pointers
-   Sliding Window
-   Divide and Conquer
-   Dynamic Programming
-   Greedy Algorithms
-   Backtracking

## Frequency Counter

-   This pattern uses objects or sets to collect values/frequencies of values
-   This can often avoid the need for nested loops of O(n^2) operations with arrays/strings

Example: Write a function called _same_, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

```js
same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false (must be same frequency)
```

## Multiple Pointers

-   Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
-   Very efficient for solving problems with minimal space complexity

Example: Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is zero. Return an array that includes bothvalues that sum to zero or undefined if a pair does not exist

```js
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
```