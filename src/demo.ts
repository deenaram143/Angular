// static members
// Absract classes
abstract class Shape{
    abstract val: number;
    
}
class Circle extends Shape{
    static PI = 3.14;
    val = 20;
    PI = 10;

}
let p = new Circle()
console.log(p.PI)
console.log(Circle.PI)//3.14, static is used to access directly by classes
