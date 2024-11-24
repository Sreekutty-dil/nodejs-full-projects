// http server
const http = require('http');
const port = 4500

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
           <div>
               <h1>Welcome to node js http server module</h1>
               <p>This is our first message</p>
           </div>
        `)
}).listen(port)

console.log(`Server running @ http://localhost:${port}`)