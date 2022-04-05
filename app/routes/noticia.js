module.exports = (app) => {
    app.get('/noticia', function(req, res){

        const connection = app.config.dbConnection();

        connection.query('select * from noticias where id_noticia = 4', (error, result) => {
            res.render("noticias/noticia", { 
                noticia : result 
            });
            console.log(result);
        })
    })
}