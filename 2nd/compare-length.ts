// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`
'use strict';
var firstList: number[] = [1, 2, 3];
var secondList: number[] = [4, 5];

if (firstList.length < secondList.length){
    console.log(secondList);
} else {
    console.log("\n\nsecondList does not have more elements, than firstList :(\n");
}