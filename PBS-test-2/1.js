// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. print the decimal value of each fraction on new line with 6 places after the decimal.

// Note : this challenge introduces precesion problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptaable.

// Example
// arr = [1, 1, 0, -1, -1]

// There n = 5 elements, two positive aare 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000. Result are printed as:

// 0.400000
// 0.400000
// 0.200000

// Function Description
// Complete the plusMinus function in editor below.
// plusMinus has the following parameter(s)
// . int arr[n] an array of integers

// Prints the positive, negative, and zero values in the array. Each value should be printed on separate line with 6 digits aafter the decimal. The function should not return a value.

function plusMinus(arr) {
    const n = arr.length;
    let positive = 0, negative = 0, zero = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            zero++;
        }
    }

    const positiveRatio = positive / n;
    const negativeRatio = negative / n;
    const zeroRatio = zero / n;

    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}

// Example usage
const arr = [1, 1, 0, -1, -1];
plusMinus(arr);
