//Create an empty map where the keys are integers and the values are characters

var newmap = {};

//Print out whether the map is empty or not
if (Object.keys(newmap).length ===0){
    console.log("not empty");
}

//Add the following key-value pairs to the map
Object.assign(newmap, {
    "97": "a",
    "98": "b",
    "99": "c",
    "65": "A",
    "66": "B",
    "67": "C"
});



//Print all the keys
console.log(Object.keys(newmap));


//Print all the values
console.log(Object.values(newmap));


//Add value D with the key 68
newmap["68"] = "D";

//Print how many key-value pairs are in the map
console.log(Object.keys(newmap).length);

//Print the value that is associated with key 99
console.log(newmap["99"]);

//Remove the key-value pair where with key 97
delete newmap["99"];

//Print whether there is an associated value with key 100 or not
if (newmap['100']) {
    console.log('there is')
} else {
    console.log("no")
}

//Remove all the key-value pairs
newmap = {};