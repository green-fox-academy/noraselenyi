'use strict';

export class Cookie{                                 // definiáljuk a classt, hogy milyen property-jei legyenek
    private flavor: string;                        // változók létrehozása
    private shape: string;
    private condition: string;
    isDiabetic: boolean;
    numberofChocolates: number;
    static pie: number = 666;
    static eziscookie: string = 'cookie';                       //egész osztály tulajdonsága



                                                // funcion/method osztály megvalósulásánál fut le
                                                // amit személyre tudunk szabni
                                                // az állapota a kezdetekkor nyers, szóval az marad

    constructor(                                // osztályhoz tartozó példányok tulajdonsága
        flavor: string = 'chocolate',           // paraméterek!!
        shape:string = 'round',
        isDiabetic: boolean = true,
        numberofChocolates: number = 0)
        {                            
        this.flavor = flavor;
        this.shape = shape;
        this.isDiabetic = isDiabetic;
        this.numberofChocolates = numberofChocolates;
        this.condition = 'raw';
    }

    setFlavor(newFlavor:string): void{                      //void, mert nem ad vissza semmit
        this.flavor = newFlavor;
    }

    getFlavor():string {
        return this.flavor;
    }                                         

    setCondition(newCondition: string): void{
        this.condition = newCondition;
    }

    getCondition(): string{
        return this.condition;
    }

}
                                                    // új cookie létrehozása, paraméterek megadása!
const myFirstCookie: Cookie = new Cookie('vanilla','bunny',false,12);

//megnézni, hogy myFirst Cookie class-e
/* console.log(myFirstCookie instanceof Cookie); */

console.log(myFirstCookie);

const reallyBoringCookie: Cookie = new Cookie();
console.log(reallyBoringCookie);

                                                                // egy paraméter átírása
//nem fog működni, mert már privát                                            
//reallyBoringCookie.flavor = "nyammnyamm";
//console.log(reallyBoringCookie);


                                                    //encapsulating: hozzáférési szintek meghatározása
reallyBoringCookie.setFlavor('spicy');
console.log(reallyBoringCookie.getFlavor());
/* console.log(reallyBoringCookie); */


console.log(myFirstCookie.getFlavor());
