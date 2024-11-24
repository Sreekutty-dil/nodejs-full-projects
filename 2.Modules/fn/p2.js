const fs = require('fs');

let data = fs.readFileSync("./doc/test.txt")

console.log(`sync read data =`, data)
console.log(`data =`, data.toString())