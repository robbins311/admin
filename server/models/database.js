const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '192.168.210.57',
    port: '3306',
    user: 'root',
    password: 'rudals123',
    database: 'withnetworks_new',
    connectionLimit: 10,
});

const promisePool = pool.promise();
module.exports = promisePool;

