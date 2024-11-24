// event emitter

const EventEmitter = require('events')

// instance
let x = new EventEmitter()

//declaration
// instance.on(name, callback)
x.on("product" , function(x,y) {
    console.log(`product = ${x * y }`)
})
x.on("sum" , function(a,b) {
    console.log(`sum =`, a + b)
})
//event call
// instance.emit(name)

x.emit("product", 10, 44)
x.emit("sum", 5, 7)
x.emit("product", 40,24)

// find the area of circle?

x.on("area of circle", function(a){
    console.log(`Area of circle =`, 3.14 * a ** a)
})
x.emit("area of circle",10 )
// find the area of triangle?