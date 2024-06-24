class Person {
    name: string;
    age: number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
    getName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    rollNumber: number;
    courses: Course[] = [];
    constructor(name: string, age: number, rollNumber: number) {
        super(name, age)
        this.rollNumber = rollNumber;
    }
    registerForCourses(courseName: Course) {
        this.courses.push(courseName)
    }
}

class Instructor extends Person {
    salary: number;
    courses: Course[] = [];
    constructor(name: string, age: number, salary: number) {
        super(name, age)
        this.salary = salary;
    }
    assignCourse(courseName: Course) {
        this.courses.push(courseName)
    }
}

const student1 = new Student("noman", 17, 214780);
const student2 = new Student("haris", 12, 4524);

const instructor1 = new Instructor("hamzah", 22, 12000);
const instructor2 = new Instructor("irfan", 26, 19000);

class Course {
    id: number;
    name: string;
    students: Student[] = [];
    instructor: Instructor[] = [];
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name
    }
    addStudent(student: Student) {
        this.students.push(student)
    }
    setInstructor(instructor: Instructor) {
        this.instructor.push(instructor)
    }
}

const course1 = new Course(1, "Next JS");
course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1)
console.log(course1)

const course2 = new Course(2, "Mongodb Mastery");
course2.addStudent(student2)
course2.setInstructor(instructor2)
console.log(course2)

class Department {
    name: string;
    courses: Course[] = [];
    constructor(name: string) {
        this.name = name
    }
    addCourse(course: Course) {
        this.courses.push(course)
    }
}

const department1 = new Department("Web Development");
department1.addCourse(course1)
const department2 = new Department("Database Mastery");
department2.addCourse(course2)
