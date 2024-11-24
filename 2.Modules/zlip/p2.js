const zlip = require('zlib');
const fs = require('fs');

const gzip = zlip.createUnzip();

let r = fs.createReadStream('text.gz');
let w = fs.createWriteStream('new.txt');

//pipeline the executions
r.pipe(gzip).pipe(w);
console.log(`content unzipped`)