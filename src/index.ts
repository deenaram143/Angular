

// simple/Basic Data types

//number
let a = 10;// automatically a data type will be number because type inference
let b: number = 20;// here i am explicitly mentioning the type==>Type annotation
//All methods of js can be included because ts is superset of js
// string
let str1 = "john" // type inference
let str2: string = "hero" // type annotation
// boolean
let check = (a > 5); //type inference
let check2: boolean = true;
// except in one case called any
let some;
some = "john"
some = 10
// use any only when it is extremely necessary
//number|string means both number and string are possible outcomes
//array- collection of similar data types
let arr = [ 1, 2, 3, 4 ];
let arr1 = [ "john", 1, 2 ];
let arr2: string[] = [ "a", "b", "c" ]
let arr3: (number | string)[] = [ "an", 2, "the" ]
// tuples
let tp: [ string, number ] = [ "raj", 23 ];// type inference of tuple won't work here
// enums - enumerated values - a default number is generated for set of finite values
enum Day{
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
}
const d: Day = Day.sunday;
console.log(d) // 0
console.log(Day[ d ]) //sunday

// type Assertions- type casting
// any or some union
let v1: (string | number);
v1= 10
console.log(v1.toFixed())
// DOM 
const anchor = document.querySelector('a') as HTMLAnchorElement
console.log(anchor)

// contracts- we define our own data types
// interfaces and type alias
//object

interface Person1
{
    name: string,
    age:number,
}
type Person2=
    {
name: string,
    age:number,
    }
let person: Person2 = {
    name: "john",
    age:20
};
interface Man extends Person1{
    height:number,
}
const person5: Man={
    name:"",
    age:50,
    height:5
}

/*  functions */
/* parameters,return value*/
// function add1(a1:number, b1:number):void
// {
//  console.log("hello")
// }
// type Add=(x:number,y:number)=>number
// const add:Add=(a,b)=>{ return a + b; };
// console.log(add(3, 5))

// function -

type Callbackfn = (a: number)=>number
const add = (a:number, b:number,c:number=20) => {
        return a + b + c;
}
const ar = [ 2, 3, 5 ]
// u can even specify types for call back functions also
// DRY- Don't repeat yourself
 const a1= add(2,2,3)
// functions async- promises
function displayValue(c:number):never
{
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



















