const crypto = require('crypto');

const hash = crypto.createHash('sha256'); // sha = secured hash algo

let input = "Welcome to node js"

let data = hash.update(input).digest('hex') // base64,base64url,binary,hex

console.log(`encrypted data =`, data)