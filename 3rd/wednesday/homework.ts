class Tree{
    type: string;
    leafcolor: string;
    age: number;
    gender: string;
    evergreen: boolean;

    constructor(
        type: string,
        leafcolor: string,
        gender: string,
        evergreen: boolean,
        age: number = 0
    ){
        this.age = age;                         //alapból 0, de így a felhasználó által beadott
        this.type = type;
        this.leafcolor = leafcolor;
        this.gender = gender;
        this.evergreen = evergreen;
    }

    giveInfoAboutTree(): void{
        console.log(
            `Your tree is a(n) ${this.gender + ' ' + this.type} aged ${
              this.age
            } with ${this.leafcolor} leaves and it is ${
              this.evergreen ? 'evergreen' : 'not evergreen'
            }`);

    }
}


const myFirstTree: Tree = new Tree('oak','greeeen','female',false);
myFirstTree.giveInfoAboutTree();