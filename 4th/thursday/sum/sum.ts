'use strict';


class Sum{
    sum(numbers: number[]): number {
        let counter = 0;
        for (let i: number = 0; i < numbers.length; i++){
            counter += numbers[i];
        }
        return counter;
    }

}
export {Sum};
// const newww: Sum = new Sum();

// console.log(newww.sum([1,2,3]));