const fs = require('fs');
const data = "All file system operations have synchronous, callback, and promise-based forms,and are accessible using both CommonJS syntax and Es6 Modules (Es6)"

// async write
fs.writeFile("./doc/write-1.txt", data, function(err) {
    if(err) throw err;
    console.log("Async File write completed")
})