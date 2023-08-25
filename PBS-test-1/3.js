// 1. Sum everything 1, the sum is 2 + 3 + 4 + 5 = 14.
// 2. Sum everything 2, the sum is 1 + 3 + 4 + 5 = 13.
// 3. Sum everything 3, the sum is 1 + 2 + 4 + 5 = 12.
// 4. Sum everything 4, the sum is 1 + 2 + 3 + 5 = 11.
// 5. Sum everything 5, the sum is 1 + 2 + 3 + 4 = 10.

// Hints: Beware of integer overflow! Use 64-bit Integer

function calculateSums(arr, excludedIndex) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i !== excludedIndex) {
            sum += arr[i];
        }
    }
    return sum;
}

const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    const sum = calculateSums(arr, i);
    console.log(`Sum everything ${arr[i]}, the sum is ${sum}.`);
}
