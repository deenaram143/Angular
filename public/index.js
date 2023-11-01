"use strict";
// simple/Basic Data types
//number
let a = 10; // automatically a data type will be number because type inference
let b = 20; // here i am explicitly mentioning the type==>Type annotation
//All methods of js can be included because ts is superset of js
// string
let str1 = "john"; // type inference
let str2 = "hero"; // type annotation
// boolean
let check = (a > 5); //type inference
let check2 = true;
// except in one case called any
let some;
some = "john";
some = 10;
// use any only when it is extremely necessary
//number|string means both number and string are possible outcomes
//array- collection of similar data types
let arr = [1, 2, 3, 4];
let arr1 = ["john", 1, 2];
let arr2 = ["a", "b", "c"];
let arr3 = ["an", 2, "the"];
// tuples
let tp = ["raj", 23]; // type inference of tuple won't work here
// enums - enumerated values - a default number is generated for set of finite values
var Day;
(function (Day) {
    Day[Day["sunday"] = 0] = "sunday";
    Day[Day["monday"] = 1] = "monday";
    Day[Day["tuesday"] = 2] = "tuesday";
    Day[Day["wednesday"] = 3] = "wednesday";
    Day[Day["thursday"] = 4] = "thursday";
    Day[Day["friday"] = 5] = "friday";
    Day[Day["saturday"] = 6] = "saturday";
})(Day || (Day = {}));
const d = Day.sunday;
console.log(d); // 0
console.log(Day[d]); //sunday
// type Assertions- type casting
// any or some union
let v1;
v1 = 10;
console.log(v1.toFixed());
// DOM 
const anchor = document.querySelector('a');
console.log(anchor);
let person = {
    name: "john",
    age: 20
};
const person5 = {
    name: "",
    age: 50,
    height: 5
};
const add = (a, b, c = 20) => {
    return a + b + c;
};
const ar = [2, 3, 5];
// u can even specify types for call back functions also
// DRY- Don't repeat yourself
const a1 = add(2, 2, 3);
// functions async- promises
function displayValue(c) {
    throw new Error();
}
const c = add(2, 5);
displayValue(c);
// classes- classes are used encapsulation --binding
// create instances 
// class Human
// {
//     name: string;
//     constructor(n:string)
//     {
//         this.name = n;
//     }
// }
// const r = new Human("raj")
// console.log(r.name);
// const k = new Human("john")
// //k.name="jessi"
