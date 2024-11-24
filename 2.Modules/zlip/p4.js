const zlip = require('zlib');
const fs = require('fs');

const gzip = zlip.createUnzip();

let r = fs.createReadStream('new.doc');
let w = fs.createWriteStream('new.gz');

//pipeline the executions
r.pipe(gzip).pipe(w);
console.log(`content unzipped`)