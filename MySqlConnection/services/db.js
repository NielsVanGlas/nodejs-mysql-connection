const mysql = require('mysql');
const config = require('../config');

const conn = mysql.createConnection(config.db); // database connection

module.exports = conn;