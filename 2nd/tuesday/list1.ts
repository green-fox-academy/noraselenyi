'use strict';

//Create an empty list which will contain names (strings)
var names: string[] = [];


//Print out the number of elements in the list
console.log(names);


//Add William to the list
names.push("William");

//Print out whether the list is empty or not
if (names.length >= 1){
    console.log("it's not empty");
}

//Add John to the list
names.push("John");


//Add Amanda to the list
names.push("Amanda");

//Print out the number of elements in the list
console.log(names.length);


//Print out the 3rd element
console.log(names[2]);

//Iterate through the list and print out each name
for (let i= 0; i < names.length; i++){
    console.log(names[i]);
}

//Iterate through the list and print
for (let i= 0; i < names.length; i++){
    console.log((i+1)+".", names[i]);
}

//Remove the 2nd element
delete names[1];


//Iterate through the list in a reversed order and print out each name
for (let i= names.length; i >= 0; i--){
    console.log(names[i]);
}

//Remove all elements
for (let i= 0; i < names.length; i++){
    delete names[i];
}
console.log(names);