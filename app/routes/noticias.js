const dbConnection = require('../../config/dbConnection')

module.exports = (app) => {
    app.get('/noticias', function(req, res){

        const connection = dbConnection()
        
        connection.query('select * from noticias', (error, result) => {
            res.render("noticias/noticias", { 
                noticias : result 
            });
            console.log(result);
        })
    })
}