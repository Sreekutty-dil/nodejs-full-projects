const net = require('net');

const client = net.connect({port:53344}, () => {
    console.log(`connected to server`)
})

// data receiption event
client.on('data', (msg) => {
    console.log(`msg =`, msg.toString())
})

//end of server connection
client.on("end", () => {
    console.log(`server disconnected`)
})