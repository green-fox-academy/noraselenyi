'use strict';

import { Person } from './person';

class Sponsor extends Person{
    company: string;
    hiredStudents: number;

    constructor(name?:string, age?:number, gender?:string,company = 'Google'){
        super(name,age,gender)
        this.company = 'Google';
        this.hiredStudents = 0;

    }

    introduce(){
        console.log('Hi, I\'m '+this.name+', a '+this.age+' year old '+this.gender+ ' who represents '+this.company+' and hired '+this.hiredStudents+' students so far.');
    }

    hire(): void{
        this.hiredStudents += 1;
    }
    getGoal(){
        console.log('My goal is: Hire brilliant junior software developers.');
    }

}

export {Sponsor};

// const stu = new Sponsor();
// console.log(stu.introduce());
// console.log(stu.getGoal());
// stu.hire();
// console.log(stu.introduce());
