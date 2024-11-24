const fs = require('fs');
const data = "\n\n Asynchronously append data to a file , creating a file if it doesn't exist"

// async append
fs.appendFile("./doc/write-1.txt", data, function(err) {
    if(err) throw err;
    console.log('Data appended to file completed !');
})
