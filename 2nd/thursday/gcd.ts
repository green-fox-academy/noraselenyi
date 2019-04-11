//Find the greatest common divisor of two numbers using recursion.

const kisnyúl:number = 10;

function gcd(first:number, second:number):any {
    if (first % second === 0 && kisnyúl % second ===0){
        return second;
    } else {
        return gcd(first, second-1);

    }
}

console.log(gcd(25,kisnyúl));