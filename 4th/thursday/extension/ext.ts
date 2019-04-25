'use strict';

export function add(a: number, b: number): number {
  return a+b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  let newlist: number[] = [a,b,c];
  let result: number[] = newlist.sort().reverse();
  return result[0];
};


export function median(pool: number[]): number{
  if (pool.length % 2 === 1){
    return pool[(pool.length-1)/2];
  } else {
    let result: number = (pool[(pool.length)/2] + pool[(pool.length)/2-1]) /2
    return result;
  }
}

//let pool: number[] = [2,4,6,8, 10];
// console.log(pool[(pool.length-1)/2]);
//console.log(median(pool));


export function isVowel(character: string): boolean {
  return ['a', 'u', 'o', 'e', 'i'].some(vowel => vowel === character);
}

//console.log(isVowel('o'));



export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
    }
  }
  return teve;
}