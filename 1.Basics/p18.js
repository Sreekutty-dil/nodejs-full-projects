const fs = require('fs');

//async read and write
console.log(`file read started`)

// fs.readFile(path,encording_format,callback)
fs.readFile("./first.txt", "utf-8" , function(err,res1) {
    if(err) throw err;
    let first = res1
    //second file data
    fs.readFile("./second.txt", "utf-8", function(err, res2) {
        if(err) throw err;
        let second = res2

        //write
        fs.writeFile("./async-result.txt", `Here is async output = \n ${first} \n \n ${second}`, function(err,out) {
            if(err) throw err;
            console.log(`file write completed`)
        })
    })
})