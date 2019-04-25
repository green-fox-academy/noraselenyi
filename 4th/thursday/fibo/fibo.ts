'use strict';

export function fibo(n: number): any{
    let fibolist: number[] = [0,1];
    if (n === 1 || n === 0){
        return n;
    } else {
        return fibo(n-1)+fibo(n-2);
    }
}

//console.log(fibo(10));