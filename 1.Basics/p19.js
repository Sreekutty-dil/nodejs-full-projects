const http = require('http');

//templetes
const server = http.createServer(function(req, res) {
    // req -> handle the incoming data to server 
    // res -> handle the outgoing data from server
    console.log(`url address =`, req.url);
})

// server listening on port 4500
server.listen(4500, function() {
    console.log(`server is started , running @ http://localhost:${4500}`)
})