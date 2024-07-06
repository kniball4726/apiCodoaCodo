const express = require('express');
const cors = require('cors');
const config = require('../config');
const port = config.port.port
const chalk = require('chalk')
const path = require('path')
const routes = require('../../src/routes/index.routes');
const authroutes = require('../../src/routes/auth.routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,('../../public'))));
app.use('/api/v1', routes);
app.use('/api/v1/auth', authroutes);
app.use('*', function(req,res) {
    res.render('404');
});

const server = async() =>{
    try {
        await app.listen(port, ()=>{
            console.log(chalk.bold.bgGreenBright(`Servidor corriendo:`))
            console.log()
            console.log(chalk.bold.white(`http://localhost:${port}`))
        })
        } catch (error) {
            console.log(chalk.bold.red(`Error: ${error}`))
            throw new Error(`No se puede conectar el servidor por el puerto ${port}`)
        }    
}
        



module.exports = server;