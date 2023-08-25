// Input Format

// The first line contains an integer, n, the size of the array
// The second line contains n space-separated integers that describe arr[n]

// Constraints

// 0 < n <= 100
// -100 <= arr[i] <= 100

// Output Format
// Print the following 3 lines, each to 6 decimals:
// 1. Proportion of positive values
// 1. Proportion of negative values
// 1. Proportion of zeros

// Sample Input
// STDIN          Function
// -----          --------
// 6              arr[] size n = 6
// -4 3 -9 0 4 1  arr =  [-4 3 -9 0 4 1]

// Sample Output
// 0.500000
// 0.333333
// 0.166667

// Explanation
// There are 3 positive numbers, 2 negative numbers, and 1 zero in the array.
// The proportions of occurrence are positive: 3/6 = 0.500000, negative: 2/6 = 0.33333 and zeros: 1/6 = 0.166667.


function plusMinus(arr) {
    const n = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    arr.forEach(element => {
        if (element > 0) {
            positiveCount++;
        } else if (element < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    });

    const positiveRatio = positiveCount / n;
    const negativeRatio = negativeCount / n;
    const zeroRatio = zeroCount / n;

    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}

// Read input from the user
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
let arr = [];

// Read n
rl.question('', size => {
    n = parseInt(size);

    // Read array
    rl.question('', input => {
        arr = input.split(' ').map(Number);
        plusMinus(arr);
        rl.close();
    });
});
