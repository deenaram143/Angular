"use strict";
//modules in js
// module systems
// common js / ES6
// import * as Em from './module1'
// const {Employee,add2,k} = Em- it will cobine both the files
import * as Em from './module1.js'
const emp = new Em.Employee("john", "doe", 20000);
console.log(emp.getData());
console.log(Em.add2(2, 3));
console.log(Em.k);
