module.exports = (application) => {
    application.get('/noticia', function(req, res){

        const connection = application.config.dbConnection();
        const noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticia(connection, (error, result) => {
            res.render("noticias/noticia", { 
                noticia : result 
            });
            console.log(result);
        })
    })
}