"use strict";
// i will create one variable,function and class
let k2 = 20;
function add2(a, b) {
    return a + b;
}
class Employee {
    constructor(fn, ln, sal) {
        this.firstName = fn;
        this.lastName = ln;
        this.salary = sal;
    }
    getData() {
        console.log(`${this.firstName} , ${this.lastName}, ${this.salary}`);
    }
}
export {Employee,k2,add2}