// We are going to represent our contacts in a map where the keys are going to be 
//strings and the values are going to be strings as well.

// Create a map with the following key-value pairs.
// Name (key)	Phone number (value)
// William A. Lathan	405-709-1865
// John K. Miller	402-247-8568
// Hortensia E. Foster	606-481-6467
// Amanda D. Newland	319-243-5613
// Brooke P. Askew	307-687-2982

var book = {
    "William A. Lathan": "405-709-1865",
    "John K. Miller": "402-247-8568",
    "Hortensia E. Foster": "606-481-6467",
    "Amanda D. Newland": "319-243-5613",
    "Brooke P. Askew": "307-687-2982"
}
console.log(book);

// Create an application which solves the following problems.
// What is John K. Miller's phone number?
console.log("John K. Miller's num is: " + book["John K. Miller"]);

// Whose phone number is 307-687-2982?
Object.keys(book).forEach(key => {
    let value = book[key];
    if (value === "307-687-2982"){
        console.log(key);
    }
});


// Do we know Chris E. Myers' phone number?
if (book["Chris E. Myers"]){
    console.log("yeah we do");
} else {
    console.log("nah we don't");
}