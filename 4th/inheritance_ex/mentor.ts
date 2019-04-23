'use strict';

import { Person } from './person';

class Mentor extends Person{
    level: string;

    constructor(name?:string, age?:number, gender?:string, level= 'intermediate'){
        super(name, age, gender)
        this.level = level;

    }

    introduce(){
        console.log('Hi, I\'m ' +this.name+ ' a ' +this.age+ ' year old ' +this.gender+' '+this.level+ ' mentor.');
    }

    getGoal(){
        console.log('My goal is: Educate brilliant junior software developers.');
    }

}

export {Mentor};

// const stu = new Mentor();
// console.log(stu.introduce());
// console.log(stu.getGoal());

