// We are going to represent a shopping list in a list containing strings.

// Create a list with the following items.
// Eggs, milk, fish, apples, bread and chicken
var shopping = ["eggs", "milk", "fish", "apples", "bread", "chicken"];
console.log(shopping);

// Create an application which solves the following problems.
// Do we have milk on the list?
var milk_result = "no milk"
for (let i= 0; i < shopping.length; i++){
    if (shopping[i]==="milk"){
        milk_result = "yea we have milk"
    }
}
console.log(milk_result);


// Do we have bananas on the list?
var banana_result = "no banana"
for (let i= 0; i < shopping.length; i++){
    if (shopping[i]==="bananas"){
        banana_result = "yea we have bananas";
    }
}
console.log(banana_result);