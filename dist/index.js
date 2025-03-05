"use strict";
let id = 5;
let company = 'Executive Holdings';
let isPublished = true;
let x = 'Hello';
let age;
let ids = [1, 2, 3];
let arr = [1, false, 'hello'];
let person;
person = [2, true];
let employees;
employees = [
    [1, 'Sola', true],
    [2, 'Taiye', false],
    [25, 'Titilope', false]
];
let pid;
pid = '22';
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
age = 35;
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
let customerId = cid;
customerId = '32';
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1, 5).toString())
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
    age: 35
};
const user5 = {
    id: 13,
    age: 15,
    name: 'Ogidan'
};
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return (this.name + ' is now registered');
    }
}
const brad = new Person(1, 'Bradd Pitt');
const peter = new Person(2, 'Peter Pan');
console.log(brad, "\n", peter);
console.log(brad.register());
// subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
        //     if (this.gender == true) {
        //         z = "male"
        //     } else {
        //         z = "female"
        //     }
        // return z
    }
}
const emp = new Employee(3, "Baba Rahman", "Dev");
// console.log(emp.register())
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'John', 'Jill']);
strArray.push();
