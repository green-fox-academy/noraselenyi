import {Cookie} from './matreview';

'use strict';

class Tray{
    remainingCapacity: number;
    readyCookies: any[];

    constructor(cookiesToBake: any[]){                             //új példányok tulajdonságai/paraméterei
        this.readyCookies = cookiesToBake;
        this.remainingCapacity = 24 - cookiesToBake.length;
    }

    putCookiesOnTray(cookie: Cookie): void{
        if (this.remainingCapacity > 0){
            this.readyCookies.push(cookie);
            this.remainingCapacity--;
            console.log('cookie is on tray');
        } else {
            console.log('tray is full');
        }
    }
                                                                //?????????????????????
    bakeMyCookies(){
        this.readyCookies.forEach(singleCookie =>{
            singleCookie.setCondition('perfectly baked!!');
        })
        console.log('all done!!!');
    }
}

const myFirstTray: Tray = new Tray([]);
console.log(myFirstTray);

const myFirstCookie: Cookie = new Cookie('vanilla','bunny',false,12);
const reallyBoringCookie: Cookie = new Cookie();

myFirstTray.putCookiesOnTray(myFirstCookie);
myFirstTray.putCookiesOnTray(reallyBoringCookie);

console.log(myFirstTray);

myFirstTray.bakeMyCookies();

console.log(myFirstCookie.getCondition());
console.log(myFirstTray);

// console.log(Math.PI);
// console.log(Cookie.pie);