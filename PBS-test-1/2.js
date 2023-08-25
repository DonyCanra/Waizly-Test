// Input Format
//  A single line of five space-separated integers.

// Constraints
// 1 <= arr[i] <= 10^9

// Output Format
// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the integers. (The output can be greater than a 32 bit integer.)

// Sample Input
// 1 2 3 4 5

// Sample Output
// 10 14

// Explanation
// The numbers are 1, 2 , 3, 4 and 5. Calculate the following sums using four of the five integers

function calculateMinMaxSums(arr) {
  arr.sort((a, b) => a - b); // Sort the array in ascending order

  const minSum = arr.slice(0, -1).reduce((sum, num) => sum + num, 0); // Sum all but the largest element
  const maxSum = arr.slice(1).reduce((sum, num) => sum + num, 0); // Sum all but the smallest element

  return [minSum, maxSum];
}

// Read input from the user
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter five space-separated integers: ", (input) => {
  const arr = input.split(" ").map(Number);
  const [minSum, maxSum] = calculateMinMaxSums(arr);
  console.log(minSum + " " + maxSum);
  rl.close();
});
