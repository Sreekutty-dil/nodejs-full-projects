const net = require('net');

const server = net.createServer(function(socket)  {
    socket.end("My new input message")
})

// exception handling event
server.on('error', (err) => {
    if(err) throw err
})

 //server start method
 server.listen(() => {
    let address = server.address()
    console.log(`server port %j`, address)
 })