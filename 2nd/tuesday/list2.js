// Create a list ('List A') which contains the following values
// Apple, Avocado, Blueberries, Durian, Lychee
var ListA = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];


// Create a new list ('List B') with the values of List A
var ListB = [];
for (let i = 0; i < ListA.length; i++){
    ListB.push(ListA[i])
}


// Print out whether List A contains Durian or not
for (let i = 0; i < ListA.length; i++){
    if (ListA[i]==="Durian"){
        console.log("Durian is in here")
    }
}


// Remove Durian from List B
for (let i = 0; i < ListB.length; i++){
    if (ListA[i]==="Durian"){
        delete ListB[i];
    }
}
console.log(ListB)


// Add Kiwifruit to List A after the 4th element
ListA.push("Kiwifruit");
console.log(ListA);

// Compare the size of List A and List B
if (ListA.length > ListB.length){
    console.log("ListA is longer");
} else if (ListA.length < ListB.length){
    console.log("ListB is longer");
} else {
    console.log("they have the same length");
}

console.log("ListA's length is: " + ListA.length, "ListB's length is: " + ListB.length);

// Get the index of Avocado from List A
console.log("index of Avocado from ListA: " + ListA.indexOf("Avocado"));


// Get the index of Durian from List B
console.log("index of Durian from ListB: " + ListB.indexOf("Durian"));

// Add Passion Fruit and Pummelo to List B in a single statement
ListB.push("Passion Fruit", "Pummelo");
//console.log(ListB);

// Print out the 3rd element from List A
//console.log(ListA);
console.log(ListA[2]);