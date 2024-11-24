const util = require('util');

let mytemplate = `Hi %s, welcome to %s and duration of this %d months`

let u1 = util.format(mytemplate, "Dil", "Nodejs", 1.3)
let u2 = util.format(mytemplate, "Sree", "Reactjs", 2.1)

console.log(`user 1 =`,u1)
console.log(`user 2 =`, u2)