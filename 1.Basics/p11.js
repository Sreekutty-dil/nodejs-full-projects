// dgram sender

const dgram = require('dgram')
const socket = dgram.createSocket('udp4')

// let msg = Buffer.from("this is our first dgram message")
let msg = Buffer.from("second message , welcome to node")

socket.send(msg,3499, "localhost")

console.log(`data successfully send , available in https://localhost:3499`)