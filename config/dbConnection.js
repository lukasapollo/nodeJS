const mysql = require('mysql')

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '601204',
        database: 'portal_de_noticias'
    });
}

