// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

'use strict';

class Counter{
    num: number;

    constructor(inum:number = 0){
        this.num = inum;
    }

    addNumber(increasing: number): void{
        this.num += increasing;
    }
    add():void {
        this.num ++;
    }
    get(): string {
        return `${this.num}`;
    }
    reset(): void {
        this.num = 0;
    }
}

const numberr: Counter = new Counter();
//console.log(numberr);

numberr.addNumber(10);
//console.log(numberr);

numberr.add();
//console.log(numberr);

//numberr.get();
console.log(numberr.get());

numberr.reset();
//console.log(numberr);
