var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.render("home/index.ejs")
})

app.get('/formulario_inclusao_noticia', function(req, res){
    res.render("admin/form_add_noticia.ejs")
})

app.get('/noticias', function(req, res){
    res.render("noticias/noticias.ejs")
})

const server = {
    PORT: 4100,
    message(){
        console.log("Server rodando com express - Porta: 4100")
    }
}
app.listen(server.PORT, server.message)