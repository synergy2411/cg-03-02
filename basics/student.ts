import { Person } from './person';

export class Student {
    private name: string;
    private age: Date;
    private email : string;
    constructor(obj : Person) {
        this.name = obj.name;
        this.age = obj.age;
        this.email = obj.email;
    }

    greet(): string {
        return `Hello from ${this.name},
        I'm ${this.age} years old!`
    }
}


export class Employee{}