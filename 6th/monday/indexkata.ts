'use strict';

export function index(nums: number[], num:number): any{
    for (let i: number= 0; i<nums.length; i++){
        if (nums[i] === num){
            return i;
        };
    };
    return -1;
};


console.log(index([2,3,4], 4));