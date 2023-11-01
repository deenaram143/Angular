// i will create one variable,function and class
let k2: number = 20;
function add2(a: number, b: number): number{
    return a + b;
}
class Employee {
    firstName: string;
    lastName: string;
    salary: number;
    constructor(fn:string,ln:string,sal:number) {
        this.firstName = fn;
        this.lastName = ln;
        this.salary=sal;
    }
    getData()
    {
     console.log(`${this.firstName} , ${this.lastName}, ${this.salary}`)
    }
}
