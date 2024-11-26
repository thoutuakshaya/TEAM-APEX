"use strict";
let sales = 1334;
let work = 432;
let q = 11134343;
let course = "typescript";
let isfunction = true;
let is_function = true;
let level;
let number1 = [1, 2, "f"];
let a = ["s", "d"];
let numbers = [];
let user = [1, "aks"];
;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.5;
}
calculateTax(33333, 2022);
console.log(calculateTax);
let employee = { id: 1,
    name: 'aksh',
    retire: (date) => {
        console.log(date);
    } };
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));
let data;
data = "TypeScript";
data = 2024;
console.log(data);
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
const favoriteColor = Color.Green;
console.log(favoriteColor);
const origin2 = { x: 0, y: 0 };
console.log(origin2);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hi, my name is ${this.name}.my age is ${this.age}`;
    }
}
const person = new Person("Bob", 30);
console.log(person.greet());
let someValue = "Hello, TypeScript!";
let strLength = someValue.length;
console.log(strLength);
//# sourceMappingURL=index.js.map