'use strict';

import { Student } from './student';
import { Mentor } from './mentor';


class Cohort{
    name: string;
    students: any[];
    mentors: any[];

    constructor(name:string){
        this.name = name;
        this.students = [];
        this.mentors = [];
    }

    addStudent(Student: any): void{
        this.students.push(Student);
    }

    addMentor(Mentor: any): void{
        this.mentors.push(Mentor)
    }    

    info(){
        console.log('The '+this.name+ ' cohort has ' +this.students.length+ ' students and '+this.mentors.length +' mentors.');

    }

}
export {Cohort};
// const stu = new Student();
// const ment = new Mentor();

// const valami = new Cohort('nyuszi');
// valami.addStudent(stu);
// valami.addMentor(ment);
// console.log(valami.info())