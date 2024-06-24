"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        console.log(`Name: ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.courses = [];
        this.rollNumber = rollNumber;
    }
    registerForCourses(courseName) {
        this.courses.push(courseName);
    }
}
class Instructor extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.courses = [];
        this.salary = salary;
    }
    assignCourse(courseName) {
        this.courses.push(courseName);
    }
}
const student1 = new Student("noman", 17, 214780);
const student2 = new Student("haris", 12, 4524);
const instructor1 = new Instructor("hamzah", 22, 12000);
const instructor2 = new Instructor("irfan", 26, 19000);
class Course {
    constructor(id, name) {
        this.students = [];
        this.instructor = [];
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
    }
    setInstructor(instructor) {
        this.instructor.push(instructor);
    }
}
const course1 = new Course(1, "Next JS");
course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);
console.log(course1);
const course2 = new Course(2, "Mongodb Mastery");
course2.addStudent(student2);
course2.setInstructor(instructor2);
console.log(course2);
class Department {
    constructor(name) {
        this.courses = [];
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const department1 = new Department("Web Development");
department1.addCourse(course1);
const department2 = new Department("Database Mastery");
department2.addCourse(course2);
