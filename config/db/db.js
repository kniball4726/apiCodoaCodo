/*const mysql = require('mysql2');
const config = require('../config');
const chalk = require('chalk');

let connection ;
 try {
        connection = mysql.createConnection({ 
        host: config.mysql.host,
        user: config.mysql.user,
        password: config.mysql.password,
        database: config.mysql.database
          });    
        console.log();
        console.log(chalk.bold.bgGreenBright('Conectado a la base de datos'));
    } catch (error) {
    console.log(chalk.red('Error: ' + error));
    throw new Error('No se ha podido conectar a la base de datos')
 }
        
 

module.exports = {connection};*/