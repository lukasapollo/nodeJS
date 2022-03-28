const http = require('http');

const server = http.createServer(function (req, res){

    const categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<h1>Server Criado - tecnologia<h1/>")
    } else if(categoria == '/moda'){
        res.end("<h1>Server Criado - moda<h1/>")
    } else if(categoria == '/beleza'){
        res.end("<h1>Server Criado - beleza<h1/>")
    } else {
        res.end("<h1>Server Criado - Home<h1/>")
    }
    
})

server.listen(3300)