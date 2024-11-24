// allocate memory
let buf = Buffer.alloc(5)
console.log(`safe memory =`, buf)

// alloc unsafe memory
let buf1 = Buffer.allocUnsafe(10)
console.log(`unsafe memory =`, buf1)

//ASCII value
let buf2 = Buffer.from("John Mathew")
console.log(`ascii =`, buf2)
console.log(`string =`, buf2.toString())

//concat the buffers
let a1 = Buffer.from("Welcome to ")
 let a2 = Buffer.from("Nodejs coding")

 let res = [a1,a2]
 let out = Buffer.concat(res)
 console.log(`out =`, out)
 console.log(`out =`, out.toString())