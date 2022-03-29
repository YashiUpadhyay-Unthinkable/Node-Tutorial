
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('WELCOME TO OUR HOME PAGE');
    }
    if(req.url === '/about'){
        res.end('This is our short history..');
    }
    res.end(`<h1>OOPS!</h1>
    <p>It seems that this page doesn't exist..</p>
    <a href='/'>Back to HOME</a>`);
});

server.listen(5000);