const fs = require('fs');

// sync append
const data = "\n\n Synchronously append data to a file , creating a file if it doesn't exist"

fs.appendFileSync("./doc/write-2.txt", data)
console.log(`file appened completed`)