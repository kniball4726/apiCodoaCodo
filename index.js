const server = require('./config/server/server');
const {connection} = require('./config/db/db')
const chalk = require('chalk');

    server();
    connection;
    console.log();

setTimeout(function(){
    console.log();
    console.log(chalk.bold.bgGreenBright("Bienvenid@, servidor escuchando y base de datos conectada"));
    console.log();
}, 2000);
