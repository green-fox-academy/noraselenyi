// Create Student and Teacher classes
// Student
// - learn()
// - question(teacher) -> calls the teachers answer method
// Teacher
// - teach(student) -> calls the students learn method
// - answer()

'use strict';

class Student{
    learn():any{
        return "I, as a student learned this amazing thing";
    }

    question() {
        return aTeacher.answer();
    }
}

class Teacher{
    teach() {
        return aStudent.learn();
    }

    answer():any {
        return "I, as a teacher helped you with this amazing thing";
    }
}

const aStudent: Student = new Student();
const aTeacher: Teacher = new Teacher();


console.log(aStudent.learn());
console.log(aStudent.question());

console.log(aTeacher.teach());
console.log(aTeacher.answer());