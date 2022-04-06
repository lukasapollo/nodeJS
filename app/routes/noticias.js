module.exports = (application) => {
    application.get('/noticias', function(req, res){

        // Um detalhe do consign é que vamos acessar os diretorios de rota
        // como uma propriedade do objeto que fica na variavel aplicattion.
        // Obs: por questões de redundancia passou-se a chamar o {app} de {application}
        const connection = application.config.dbConnection();
        const noticiasModels = application.app.models.noticiasModel;

        noticiasModels.getNoticias(connection, (error, result) => {
            res.render("noticias/noticias", { 
                noticias : result 
            });

            console.log(result);
        })
    })
}