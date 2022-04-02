const res = require('express/lib/response');

module.exports = (app) => {

    app.get('/noticias', function(req, res){

        const mysql = require('mysql')

        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '601204',
            database: 'portal_de_noticias'
        });

        connection.query('select * from noticias', (error, result) => {
            res.send(result)
            console.log(result)
        })

        //res.render("noticias/noticias")
    })
}