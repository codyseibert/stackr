var mysql = require('mysql');

var DBConnection = function () {
    'use strict';

    var connection;

    connection = mysql.createConnection({
        host: process.env.STACKR_DB_HOST,
        database: process.env.STACKR_DB_NAME,
        user: process.env.STACKR_DB_USER,
        password: process.env.STACKR_DB_PASS
    });
    connection.connect();

    return connection;
};

module.exports = new DBConnection();
