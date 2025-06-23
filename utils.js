const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "app"
});

connection.connect();

function query(sql, callback) {
    connection.query(sql, (err, result) => {
        if (err) return callback(err, null);
        return callback(null, result);
    });
}

// Fonction sécurisée avec paramètres
function queryWithParams(sql, params, callback) {
    connection.query(sql, params, (err, result) => {
        if (err) return callback(err, null);
        return callback(null, result);
    });
}

module.exports = { query, queryWithParams };
