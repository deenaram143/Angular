function sayGreet<K>(str:K):K {
    return str
}
console.log(sayGreet<string>("john"));
console.log(sayGreet<number>(5));

function printData<X, Y,Z>(data1: X, data2: Y,data3?:Z) {
	console.log("Output is: ", data1, data2)
}

printData("Hello", "World",true)
printData(123, ["Hi", 123])//number,Array




class Mobile<T>
{
    os: T;
    constructor(name: T)
    {
        this.os = name;
    }
}
const k= new Mobile("android")





