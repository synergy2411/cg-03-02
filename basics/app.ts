// var x = "20";
// var y = 20;

// console.log(x + y);             //2020
// console.log(x - y);             // ?

// console.log(x == y);            // ?
// console.log(x === y);            // ?


// ES6+ feature

// Arrow Function

// var numbers = [1,2,3,4,5];

// // ES5

// var doubleValue = numbers.map(function(value){
//     return value * 2;
// });
// console.log("Double Array : ", doubleValue);

// // ES6 : Arraow function
// var tripleValue = numbers.map( value => value * 3);
// console.log("Triple Value : ", tripleValue);





// Destructuring : the collection [Array / Object]

// var friends = ["foo", "bam","bar", "bas"];

// var [arr1, arr3, arr4] = friends;

// console.log(arr3);          // ?


var person = {
    firstName : "Foo",
    email : "test@test.com",
    age : 32,
    greet : () => {
        console.log("Hello There");
    }
}

var {firstName, age, email, greet : gt} = person;
console.log(firstName);
// greet();
gt();

var user = {
    name : "Foo",
    address : {
        city : "Bengaluru",
        street : "201, Main Road"
    },
    friends : ["Bar", "Bam", "Baz"]
}






















// var arr = [32, 54, "foo", {gree : "Hello"}, () => {console.log("Hello World")}, true];

// console.log(arr[2]);            // ?
// arr[4]();

// var x = "Some String";

// console.log(typeof x);          // stirng

// x = 32;
// console.log(typeof x);             // ?
// x = true;
// console.log(typeof x);             // ?

// 




// Spread / Rest
// Class
// Module
// Template String
// Decorators