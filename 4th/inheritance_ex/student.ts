'use strict';

import { Person } from './person';

class Student extends Person{
    previousOrganization: string;
    skippedDays: number;

    constructor(name?:string, age?:number, gender?:string, previousOrganization = 'The School of Life'){
        super(name, age, gender)
        this.previousOrganization = previousOrganization;
        this.skippedDays = 0;
    }

    introduce(){
        console.log( 'Hi, I\'m ' +this.name+ ' a ' +this.age+ ' year old ' +this.gender+ ' from ' +this.previousOrganization+ ' who skipped ' +this.skippedDays+ ' days from the course already.');
    }
    getGoal(){
        console.log('My goal is: Be a junior software developer.');
    }

    skipDays(numberOfDays: number): void{
        this.skippedDays += numberOfDays;
    }
}

export {Student};

// const stu = new Student();
// console.log(stu.introduce());
// console.log(stu.getGoal());
// stu.skipDays(3);
// console.log(stu.introduce());
