
// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

var given_number: number = 4;

var sum: number = 0;
for (var i = 1; i <= given_number; i++) {
    sum = sum + i;
}

console.log("\nSum:",sum);

var average: number = sum / (i-1)
console.log("Average: ",average, "\n");
