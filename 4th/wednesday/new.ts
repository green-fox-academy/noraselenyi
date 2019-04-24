interface myInterface {                            //megszabja, hogy ezen feltételeknek feleljen meg
    a: number,                                // megkötés!!  classnak bare minimum
    b: number,                                // private-public cant be set
    c: number
};
const myObject: myInterface = {
    a: 6,
    b: 7,
    c: 8
};







interface personInterface {                 // nem lehet megadni, hogy mit csináljon, mennyi legyen
    age: number,
    name: string,
    phone: number,
    getAge(): number
}

interface footballPlayer {
    goalKeeper: boolean,

}

const jozsi: personInterface = {                    // object esetén nem lehet hozzáadni   
    age: 6,
    name: 'jozsi',
    phone: 824243,
    getAge: () => 8
};

class Person implements personInterface, footballPlayer {     // tartozhat hozzá több interface
    age: number;
    name: string;
    phone: number;
    thatsnew: number;                                         // class esetén lehet hozzáadni   
    getAge(){
        return 8
    };

    goalKeeper: boolean
};






            //már definiálhatjuk/ childban definiálunk
            //több kölyök, 1 szülő
abstract class Plant{                               // child gyűjtő, önmagában wuut
    public abstract printStatus(): void
}

class Flower extends Plant{
    public printStatus(): void{
        console.log('dddd');
    }
}

//      const plant = new Plant();                      nem lehet, mert abstract

class Tree extends Plant{

}
