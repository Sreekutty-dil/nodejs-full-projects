console.log("Welcome to Nodejs");
// numbers
let x = 123
let y = 34

let res = x * y

console.log("Product =", res);

//string
let str = "Welcome to Nodejs"
console.log(`string =`,str)

// boolean
let view = false
console.log("boolean =", view)

//array
let colors = ["red", "green", "blue"]
console.log(`array =`, colors)

// for(let i=0; i< 10; i++) {
 for(let i =0; i< colors.length;i++) {
    console.log(`values =`,colors[i])
}

//object
let user = {
    name: "Sreekutty Dil" ,
    age: 25 ,
    city: "Bangalore"
}
console.log(`name =`,user.name)
console.log(`age =`,user.age)
console.log(`city =`,user.city)

//functions
function product(a,b) {
    return a * b;
}
let  out = product(10,44)
console.log(`product =`,product(10,44))
console.log(`product =`, out)

