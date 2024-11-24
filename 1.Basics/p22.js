const http = require('http');
const PORT = 4503
const server = http.createServer()

// build in server event 
server.on("request", function (req, res) {
    // templete
    console.log(`url address =`, req.url);
    if(req.url === "/") {
        res.end(`<div>
                    <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/shop">Shop</a>
                    </nav>
                    <section>
                    <h1>Welcome to  Home</h1>
                    </section>
            </div>`)
    } else if (req.url === "/about") {
        res.end(`<div>
            <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/shop">Shop</a>
            </nav>
            <section>
            <h1>About Page</h1>
            </section>
    </div>`)
    } else if (req.url === "/contact") {
        res.end(`<div>
            <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/shop">Shop</a>
            </nav>
            <section>
            <h1>Contact Page</h1>
            </section>
    </div>`)
    } else {
        res.end(`<div>
            <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/shop">Shop</a>
            </nav>
            <section>
            <h1>404 Page Not Found</h1>
            </section>
    </div>`)
    }
})

server.listen(PORT, () => {
    console.log(`server is up and running @ http://localhost:${PORT}`)
})