const mysql = require('mysql');
const pool = mysql.createPool({
    host     : '127.0.0.1',
    user     : 'root',
    password : '123456',
    database : 'node'
})

function query(sql,value,callback) {
    pool.getConnection(function (err,connection) {
        connection.query(sql,value,function (err,result) {
            callback(err,result);
        })
    })
}

module.exports = query;
