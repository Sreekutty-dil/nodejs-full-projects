// dgram => used for communication through UDP protocol

// User Defined Protocal 4 / 6

// listener

const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

// node event => on(name,callback)
socket.on("message", function (msg,err){
    if(err) console.log(err);
    console.log(`message =`, msg.toString())
})
// port
socket.bind(3499)