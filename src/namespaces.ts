//namespaces- internal modules- block which contained related functions,classes,types or interfaces
// export function add
// export class calculator
// export a
// export class car
//export function showBrand
namespace outer{
 export namespace Vehicle {
	export class Car {
		brand: string
		constructor(b: string) {
			this.brand = b
		}
	}
	export function sayGreet(str: string) {
		console.log("hello world" + str)
	}
}
}

outer.Vehicle.sayGreet("john")















// shapes.ts
namespace Geometry {
    export namespace Circle {
        export function calculateArea(radius: number): number {
            return Math.PI * radius * radius;
        }
    }

    export namespace Rectangle {
        export function calculateArea(width: number, height: number): number {
            return width * height;
        }
    }
}

// app.ts
const circleArea = Geometry.Circle.calculateArea(5);
console.log(`Circle Area: ${circleArea}`);

const rectangleArea = Geometry.Rectangle.calculateArea(4, 6);
console.log(`Rectangle Area: ${rectangleArea}`);
