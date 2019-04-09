var price = {
    "Milk": 1.07,
    "Rice": 1.59,
    "Eggs": 3.14,
    "Cheese": 12.60,
    "Chicken Breasts": 9.40,
    "Apples": 2.31,
    "Tomato": 2.58,
    "Potato": 1.75,
    "Onion": 1.10
}

var bobs = {
    "Milk": 3,
    "Rice": 2,
    "Eggs": 2,
    "Cheese": 1,
    "Chicken Breasts": 4,
    "Apples": 1,
    "Tomato": 2,
    "Potato": 1,
}
var alices = {
    "Rice": 1,
    "Eggs": 5,
    "Chicken Breasts": 2,
    "Apples": 1,
    "Tomato": 10
}
/*
Object.keys(products).forEach(key => {
    let value = products[key];
    if (value < 201){
        console.log("-",key);
    }
});
   */ 

// How much does Bob pay?
var bobs_bill = 0;
var bobs_foodlist = Object.keys(bobs);
var keeper = 0;

for (let i = 0; i < bobs_foodlist.length; i++){
    keeper = price[bobs_foodlist[i]] * bobs[bobs_foodlist[i]];
    bobs_bill += keeper;
}
console.log("\nBob's bill is: " + bobs_bill);


// How much does Alice pay?
var alices_bill = 0;
var alices_foodlist = Object.keys(alices);
var counter = 0;

for (let i = 0; i < alices_foodlist.length; i++){
    counter = price[alices_foodlist[i]] * alices[alices_foodlist[i]];
    alices_bill += counter
}
console.log("Alices's bill is: " + alices_bill, "\n");


// Who buys more Rice?
if (bobs["Rice"] && alices["Rice"]){
    if (bobs["Rice"] > alices["Rice"]){
        console.log("\nBob buys more rice.")
    } else if (bobs["Rice"] < alices["Rice"]){
        console.log("\nAlice buys more rice.")
    } else {
        console.log("\nThey buy the same amount.")
    }

    console.log("Bob buys: " + bobs["Rice"] + ", Alice buys: "+ alices["Rice"]);
} else {
    console.log("\nOne of them refuses to buy Rice.");
}

// Who buys more Potato?
if (bobs["Potato"] && alices["Potato"]){
    if (bobs["Potato"] > alices["Potato"]){
        console.log("\nBob buys more potato.")
    } else if (bobs["Potato"] < alices["Potato"]){
        console.log("\nAlice buys more potato.")
    } else {
        console.log("\nThey buy the same amount.")
    }

    console.log("Bob buys: " + bobs["Potato"] + ", Alice buys: "+ alices["Potato"]);
} else {
    console.log("\nOne of them refuses to buy Potato.");
}

// Who buys more different products?
if (bobs_foodlist.length > alices_foodlist.length){
    console.log("\nBob buys more kinds of stuff.")
} else if (bobs_foodlist.length < alices_foodlist.length){
    console.log("\nAlice buys more kinds of stuff.")
} else {
    console.log("\nThey buy the same num of types.")
}

// Who buys more products? (piece)
var bob_sum = 0;
var alice_sum = 0;

bobsval = Object.values(bobs);
for (let i = 0; i < bobsval.length; i++){
    bob_sum += bobsval[i]
}

alicesval = Object.values(alices);
for (let i = 0; i < alicesval.length; i++){
    alice_sum += alicesval[i]
}
console.log("Bob buys:", bob_sum, ", Alice buys:", alice_sum);