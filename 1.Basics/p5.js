// node js inbuilt module

// assert module => handle runtime exceptions

//import the module
const assert = require('assert');

let con = 10 < 30
console.log(`condition =`,con) // true
let con1 = 10 > 30
console.log(`condition =`, con1) // false

console.log(`assert(10 > 30) =`, assert(con1))// throw err msg