// async file delete
const fs = require('fs');

fs.unlink("./doc/write-1.txt", function(err) {
    if(err) throw err;
    console.log("file deleted successfully")
})