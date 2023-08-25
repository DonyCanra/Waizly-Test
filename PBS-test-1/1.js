// Given five positive integers find minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example
// arr = [1, 3, 5, 7, 9]

// The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24. the functions prints
// 16 24

// Function Description
// Complete the miniMaxSum function in the editor below.
// miniMaxSum has the following parameter(s):
//  . arr.an array of 5 integers

// Print
// Print two space-separated integers on one line: the mimimum sum and the maximum sum of 4 of 5 elements.

function miniMaxSum(arr) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    const minSum = arr.slice(0, -1).reduce((sum, num) => sum + num, 0); // Sum all but the largest element
    const maxSum = arr.slice(1).reduce((sum, num) => sum + num, 0); // Sum all but the smallest element
    console.log(minSum + " " + maxSum);
}

// Example usage
const arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);