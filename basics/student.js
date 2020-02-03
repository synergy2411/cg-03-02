"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.email = obj.email;
    }
    Student.prototype.greet = function () {
        return "Hello from " + this.name + ",\n        I'm " + this.age + " years old!";
    };
    return Student;
}());
exports.Student = Student;
