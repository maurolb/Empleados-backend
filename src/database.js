const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'company'
});

mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err);
        return;
    }else {
        console.log('BASE DE DATOS CONECTADA');
    }
});

module.exports = mysqlConnection;