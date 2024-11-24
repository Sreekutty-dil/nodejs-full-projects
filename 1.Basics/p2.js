// condition stmts

let x = 120

if (x > 100) {
    console.log(`x value is greater than 100.`)
} else if (x < 100) {
    console.log(`x value is less than 100.`)
} else if (x === 100){
    console.log(`x value is equal to 100.`)
} else {
    console.log(`check your input.`)
}

// switch case
let tech = "Css"
switch(tech) {
    case "html" :
        console.log(`html language`)
        break;
        
    case "css" :
        console.log(`css language`)
        break;
        
    case "javascript" :
        console.log(`javascript language`)
        break;
        
    default:
        console.log(`check your input`)
}

//while
let i = 1
let num = 5

while(i <= 10) {
    console.log(`${num} * ${i} = ${num * i} `)
    i++;
}

// do while
let j = 1
let inp = 6

do {
    console.log(`${inp} * ${j} = ${inp * j}`)
    j++;
} while(j <= 10)
