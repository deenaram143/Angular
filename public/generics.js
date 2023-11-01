"use strict";
function sayGreet(str) {
    return str;
}
console.log(sayGreet("john"));
console.log(sayGreet(5));
function printData(data1, data2, data3) {
    console.log("Output is: ", data1, data2);
}
printData("Hello", "World", true);
printData(123, ["Hi", 123]); //number,Array
class Mobile {
    constructor(name) {
        this.os = name;
    }
}
const k = new Mobile("android");
