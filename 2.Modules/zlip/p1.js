const zlib = require('zlib');
const fs = require('fs');

// zlib => zip and unzlib the content

let gzip = zlib.createGzip()

let r = fs.createReadStream('myfile.txt')
let w = fs.createWriteStream('text.gz')

// write
r.pipe(gzip).pipe(w)

console.log('zip completed.')