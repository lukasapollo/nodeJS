const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');


const app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({ extended: true }));

consign()
    .include('app/routes') // 1
    .then('config/dbConnection.js') // 2
    .then('app/models') // 3
    .into(app) // 4

module.exports = app;

// comment 1: Com o consign podemos incluir a as config. que estão no server através da variavel app
// para os diretorios que passamos como parametro no include. A partir dai não precisamos fazer o uso do require 
// Ou seja, o consign ajuda na redundancia de require que seria a importação 
// mas note que ainda temos que fazer o export de {app}.

// comment 2 and 3: Aqui existem alguns detalhes diferentes. Ao meu ver podemos notar que com o .then() apenas
// estamos dizendo "Então, inclua tambem essas rotas para o nosso server a partir de './dir/arquivo.js' passado como argumento"

// comment 4: No into recebemos a variavel {app} que são as config. de server e é onde indicamos para onde vamos incluir
// as rotas passadas pelo consign.