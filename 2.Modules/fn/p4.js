const fs = require('fs');
const data = "All file system operations have synchronous, callback, and promise-based forms,and are accessible using both CommonJS syntax and Es6 Modules (Es6)"

//synch write
fs.writeFileSync("./doc/write-2.txt" ,  data)
console.log(`sync write completed`)