// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000


var a: number = 6;
var b: number = 10;
var c: number = 16;


var surface_area = 2 * (a*b + a*c + b*c);
var volume = a * b * c;

console.log("\nSurface Area:", surface_area,  "\nVolume:", volume, "\n");