"use strict";
// static members
// Absract classes
class Shape {
}
class Circle extends Shape {
    constructor() {
        super(...arguments);
        this.val = 20;
        this.PI = 10;
    }
}
Circle.PI = 3.14;
let p = new Circle();
console.log(p.PI);
console.log(Circle.PI); //3.14, static is used to access directly by classes
