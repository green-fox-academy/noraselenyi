// We are going to represent our products in a map where the keys are strings
//representing the product's name and the values are numbers representing the product's price.

// Create a map with the following key-value pairs.
// Product name (key)	Price (value)

var products={
    "Eggs": 200,
    "Milk": 200,
    "Fish": 400,
    "Apples": 150,
    "Bread": 50,
    "Chicken": 550    
}
console.log(products);


// Create an application which solves the following problems.
// How much is the fish?
console.log("Fish coasts: "+ products["Fish"]);

// What is the most expensive product?
values = Object.values(products)
console.log(values);
var coasts_most = 0;

for (let i= 0; i < values.length; i++){
    if (values[i] > coasts_most){
        coasts_most = values[i];
    }
}
console.log("The most expensive is: " + coasts_most);


// What is the average price?
var sum = 0;
for (let i= 0; i < values.length; i++){
    sum += values[i];
}

var average = sum / values.length;
console.log("The average is: " + average);

// How many products' price is below 300?
var counter = 0;
for (let i= 0; i < values.length; i++){
    if (values[i] < 300){
        counter += 1;
    }
}
console.log("\nThere are: " + counter + " items below 300 bucks.");


// Is there anything we can buy for exactly 125?
var enough = "There is nothing for 125 dodos.";

for (let i= 0; i < values.length; i++){
    if (values[i] === 125){
        enough = "There is something for you for 125."
    }
}
console.log(enough);

// What is the cheapest product?
var so_cheap = values[1];

for (let i= 0; i < values.length; i++){
    if (values[i] < so_cheap){
        so_cheap = values[i];
    }
}
console.log("omg it's so cheap it's only " + so_cheap + " money.\n");