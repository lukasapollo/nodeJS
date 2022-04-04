const mysql = require('mysql')


const connMySQL = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '601204',
        database: 'portal_de_noticias'
    });
}

module.exports = () => {
    return connMySQL;
}

