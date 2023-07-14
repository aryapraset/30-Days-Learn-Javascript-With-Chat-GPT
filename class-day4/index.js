class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(greeting){
        console.log(`${greeting} ${this.name} berusia ${this.age} tahun`);
    }
}

class Student extends Person {
    constructor(name, major){
        super(name);
        this.major = major;
    }
    greet(greeting){
        console.log(`${greeting} ${this.name} from ${this.major} Student`);
    }
}

const person = new Person('John', 25);
const student = new Student('Arya', 'PTE');

person.greet('Hai, perkenalkan saya');
student.greet('Hai, perkenalkan saya');


