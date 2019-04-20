// Petrol Station
// Create a Station and a Car classes
// Station
// - gasAmount
// - refill(car) -> decreases the gasAmount by the capacity of the car 
// and increases the cars gasAmount
// Car
// - gasAmount
// - capacity
// - create constructor for Car where:
//  - initialize gasAmount -> 0
//  - initialize capacity -> 100

'use strict';

class Station{
    gasAmount: number;
    constructor(gasAmount: number = 200){
        this.gasAmount = gasAmount;
    }

    refill(){
        newcar.cars_gasAmount += 1;
        station.gasAmount -= 1;
        return newcar.cars_gasAmount;
    }
}

class Car{
    cars_gasAmount: number;
    capacity: number;

    constructor(){
        this.cars_gasAmount = 0;
        this.capacity = 100;
    }
}

const newcar: Car = new Car();
const station: Station = new Station();

console.log(station);
console.log(newcar);
station.refill();
console.log(newcar);
console.log(station);