// async read

const fs = require('fs')

fs.readFile("./doc/test.txt" , function(err,data) {
    if(err) throw err;
    console.log(`data =`, data)
    console.log(`data =`,data.toString())
})

