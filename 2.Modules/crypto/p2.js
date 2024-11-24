// hmac => hash based message authentication code

let crypto = require('crypto');

let hash = crypto.createHmac('sha256', 'test1234')

let input = "Welcome to nodejs"

let res = hash.update(input).digest("base64")
console.log(`output =`, res)