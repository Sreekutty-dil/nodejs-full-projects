const fs = require('fs');

console.log(`file read started`)
//synchronous read and write
const first = fs.readFileSync("./first.txt")
const second = fs.readFileSync("./second.txt")

fs.writeFileSync("./result.txt", `Here is my result = ${first} \n\n ${second}`, {flag: 'a'})

console.log(`file write completed`)