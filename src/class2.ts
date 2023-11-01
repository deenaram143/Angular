 class Person {
	public readonly firstName: string
	lastName: string

	constructor(fn: string, ln: string) {
		this.firstName = fn // this means current calling object
		this.lastName = ln
	}

	getFullName(): string {
		return `${this.firstName} ${this.lastName}`
	}
}
 let numb=10;
 function display(): void{
    console.log("hello")
}
export { numb, display, Person }
