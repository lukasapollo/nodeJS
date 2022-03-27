const http = require('http');

const server = http.createServer(function (req, res){
    res.end("<h1>Server Criado - Hello word<h1/>")
})

server.listen(3300)