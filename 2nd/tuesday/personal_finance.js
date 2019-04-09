// We are going to represent our expenses in a list containing integers.

// Create a list with the following items.
// 500, 1000, 1250, 175, 800 and 120
var expenses = [500, 1000, 1250, 175, 800, 120];
console.log(expenses);


// Create an application which solves the following problems.
// How much did we spend?
var sum = 0;
for (let i= 0; i < expenses.length; i++){
    sum += expenses[i]
}
console.log("The sum is: " + sum);


// Which was our greatest expense?
var greatest = 0;
for (let i= 0; i < expenses.length; i++){
    if (expenses[i] > greatest){
        greatest = expenses[i]
    }
}
console.log("The greatest is: " + greatest);

// Which was our cheapest spending?
var cheapest = expenses[0];
for (let i= 0; i < expenses.length; i++){
    if (expenses[i] < cheapest){
        cheapest = expenses[i]
    }
}
console.log("The cheapest is: " + cheapest);

// What was the average amount of our spendings?
var average = sum / expenses.length;
console.log(average);