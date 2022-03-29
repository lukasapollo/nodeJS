var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("<h1>Pagina Home</h1>")
})

app.get('/tecnologia', function(req, res){
    res.render("assets/tecnologia.ejs")
})

app.get('/contato', function(req, res){
    res.send("<h1>Pagina de contato</h1>")
})
app.listen(4100, x => console.log({ Status: "Server rodando com express", PORT: 4100 }))