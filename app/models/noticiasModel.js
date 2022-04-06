module.exports = function(app){

    this.getNoticias = (connection, callback) => {
        connection.query('select * from noticias', callback);
    }

    this.getNoticia = (connection, callback) => {
        connection.query('select * from noticias where id_noticia = 4', callback);
    }

    return this;
}