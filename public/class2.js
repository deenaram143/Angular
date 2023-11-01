class Person {
    constructor(fn, ln) {
        this.firstName = fn; // this means current calling object
        this.lastName = ln;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let numb = 20;
function display() {
    console.log("hello");
}
export { numb, display, Person };
