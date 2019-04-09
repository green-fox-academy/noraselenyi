//Create a map where the keys are strings and the values are strings with the following initial values

var newmap = {
    "978-1-60309-452-8": "A Letter to Jo",
    "978-1-60309-459-7": "Lupus",
    "978-1-60309-444-3": "Red Panda and Moon Bear",
    "978-1-60309-461-0": "The Lab"
};
//console.log(newmap);


// Print all the key-value pairs in the following format

// A Letter to Jo (ISBN: 978-1-60309-452-8)
// Lupus (ISBN: 978-1-60309-459-7)
// Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
// The Lab (ISBN: 978-1-60309-461-0)
var length_of_map = Object.keys(newmap);

for (let i = 0; i < length_of_map.length; i++){
    var maybe = Object.entries(newmap)[i];
    console.log(maybe[1] + " (ISBN: " + maybe[0]+")");
}



// Remove the key-value pair with key 978-1-60309-444-3
console.log("original map is: \n", newmap);
delete newmap["978-1-60309-444-3"];
console.log("\n978-1-60309-444-3 should be removed\n", newmap);


// Remove the key-value pair with value The Lab
Object.keys(newmap).forEach(key => {
    let value = newmap[key];
    if (value === "The Lab"){
        delete newmap[key];
    }
});

console.log("The Lab should be deleted:\n", newmap);



// Add the following key-value pairs to the map

// Key	Value
// 978-1-60309-450-4	They Called Us Enemy
// 978-1-60309-453-5	Why Did We Trust Him?

newmap["978-1-60309-450-4"] = "They Called Us Enemy";
newmap["978-1-60309-453-5"] = "Why Did We Trust Him?";
console.log(newmap);


// Print whether there is an associated value with key 478-0-61159-424-8 or not
if (newmap["478-0-61159-424-8"]){
    console.log("there is ");
} else {
    console.log("there is no ");
}

// Print the value associated with key 978-1-60309-453-5
console.log(newmap["978-1-60309-453-5"]);