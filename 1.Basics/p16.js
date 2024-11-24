// path module

const path = require('path');
console.log(`path sep =`, path.sep) // index path

// join path
const filePath = path.join("/content", "sub", "test.txt");
console.log(`file path =`, filePath)

//base path

const base = path.basename(filePath);
console.log(`base path =`, base)

//absolute path

const abs = path.resolve(__dirname, "content", "sub", "test.txt");
console.log(`absolute Path =`, abs)