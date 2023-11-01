"use strict";
//namespaces- internal modules- block which contained related functions,classes,types or interfaces
// export function add
// export class calculator
// export a
// export class car
//export function showBrand
var outer;
(function (outer) {
    let Vehicle;
    (function (Vehicle) {
        class Car {
            constructor(b) {
                this.brand = b;
            }
        }
        Vehicle.Car = Car;
        function sayGreet(str) {
            console.log("hello world" + str);
        }
        Vehicle.sayGreet = sayGreet;
    })(Vehicle = outer.Vehicle || (outer.Vehicle = {}));
})(outer || (outer = {}));
outer.Vehicle.sayGreet("john");
// shapes.ts
var Geometry;
(function (Geometry) {
    let Circle;
    (function (Circle) {
        function calculateArea(radius) {
            return Math.PI * radius * radius;
        }
        Circle.calculateArea = calculateArea;
    })(Circle = Geometry.Circle || (Geometry.Circle = {}));
    let Rectangle;
    (function (Rectangle) {
        function calculateArea(width, height) {
            return width * height;
        }
        Rectangle.calculateArea = calculateArea;
    })(Rectangle = Geometry.Rectangle || (Geometry.Rectangle = {}));
})(Geometry || (Geometry = {}));
// app.ts
const circleArea = Geometry.Circle.calculateArea(5);
console.log(`Circle Area: ${circleArea}`);
const rectangleArea = Geometry.Rectangle.calculateArea(4, 6);
console.log(`Rectangle Area: ${rectangleArea}`);
