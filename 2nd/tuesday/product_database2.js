// We are going to represent our products in a map where the keys are strings representing 
// the product's name and the values are numbers representing the product's price.

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
// Which products cost less than 201? (just the name)
var values = Object.values(products);

console.log("products cost less than 201:");
Object.keys(products).forEach(key => {
    let value = products[key];
    if (value < 201){
        console.log("-",key);
    }
});
    

// Which products cost more than 150? (name + price)

console.log("products cost more than 150:");
Object.keys(products).forEach(key =>{
    let value = products[key];
    if (value > 150){
        console.log("-",key)
    }
});