module.exports = (app) => {
    app.get('/noticias', function(req, res){

        const connection = app.config.dbConnection();

        connection.query('select * from noticias', (error, result) => {
            res.render("noticias/noticias", { 
                noticias : result 
            });
            console.log(result);
        })
    })
}