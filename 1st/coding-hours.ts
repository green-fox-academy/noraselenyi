// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

var daily: number = 6;
var semesterLength: number = 17;
var codinghours_per_semester = daily * semesterLength * 5;

console.log("\n\nHours/semester spent with coding:", codinghours_per_semester);

var if52_is_average = 52 * 17;

var all_hours = 17 * 7 * 24;

var result = if52_is_average/all_hours * 100;

console.log("Percentage of coding hours is: " + result + "%\n\n");