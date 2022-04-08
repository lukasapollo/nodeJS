module.exports = (application) => {
    application.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia")
    })

    application.post('/noticias/salvar', function(req, res){
        var noticia = req.body
        // Conecção
        // Model
        // Salvar noticia
        const connection = application.config.dbConnection();
        const noticiasModels = application.app.models.noticiasModel;

        noticiasModels.salvarNoticias(noticia ,connection , (error, result) => {
            res.redirect("/noticias");
        })
    })
}