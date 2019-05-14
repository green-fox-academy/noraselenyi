'use strict';

export function converter(amount:number): string{
    // original to list of numbers
    let num:any = amount.toString().split('');
    for (let i:number = 0; i < num.length; i++){
        num[i] = +num[i];
    }

    let nums: string[] = ['zero','one','two','three','four','five',
                        'six','seven','eight','nine'];

    let tens: string[] = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
                            'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let rounds: string[] = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty',
                            'seventy', 'eighty', 'ninety'];


    let result: string[] = []


    if (num.length === 1){
        result.push(nums[num[0]]);
    }
    
    if (num.length >= 4){
        if (num.length === 5 && num[num.length-5] === 1){
            result.push(tens[num[num.length-4]-1] + ' thousand');
        }
        else if (num.length === 5){
            result.push(rounds[num[num.length-5]-1] + ' thousand');
        }
        if (num[num.length]-4 !== 0){
            result.push(nums[num[num.length-4]] + ' thousand');
        }
    }    

    if (num.length >= 3 && num[num.length-3] !== 0){
        result.push(nums[num[num.length-3]] + ' houndred');
    }

    if (num.length > 1){
        if (num[num.length-1] === 0){
            result.push(rounds[num[num.length-2]-1]);
        }
        else if (num[num.length-1] !== 0){
            result.push(rounds[num[num.length-2]-1]);
            result.push(nums[num[num.length-1]]);
        }
    }
    
    return result.join(' ');
}

console.log(converter(9122));