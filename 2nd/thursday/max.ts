'use strict';

//Write a function that finds the largest element of an array 
//using recursion.

let nums: number[] = [2,6,13,4,55];

function max(nums: number[]):any {
    if (nums.length > 1){
        if (nums[0]<nums[1]){
            nums.splice(0,1);
        } else {
            nums.splice(1,1);
        }
        return max(nums);
    } else {
        return nums[0];
    }

}
console.log(max(nums));
