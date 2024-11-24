// import
let {x, y, user1, user2} = require("./content");// require is built in
let {sum, product} = require("./method");
console.log(`x =`,x)
console.log(`y =`,y)
console.log(`user1 =`,user1)
console.log(`user2 =`,user2)

let out1 = sum(x,y)
console.log(`sum =`,out1)

product(x,y)