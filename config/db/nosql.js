const mongoose = require('mongoose')
const chalk = require('chalk')
const {DB_URI} = require('../config')

const nosql = async()=>{
    try {
        await mongoose.connect(DB_URI.db_uri)
        console.log();
        console.log(chalk.bold.bgGreen('Base de datos conectada con exito'))
    } catch (error) {
        console.log(error);
        throw new Error(chalk.bold.bgRedBright('No se ha conectado a la base de datos'))
    }
}

module.exports = nosql;