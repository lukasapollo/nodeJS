module.exports = function(){

    this.getNoticias = (connection, callback) => {
        connection.query('select * from noticias', callback);
    }

    this.getNoticia = (connection, callback) => {
        connection.query('select * from noticias where id_noticia = 4', callback);
    }

    this.salvarNoticias = (noticia ,connection, callback) => {
        connection.query('insert into noticias set ? ',noticia , callback);
    }

    return this;
}