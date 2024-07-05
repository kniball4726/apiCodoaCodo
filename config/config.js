require('dotenv').config();

module.exports = {

    secretkey: process.env.SECRETKEY,
    tokenExpiresIn: '10m',

    port:{
        port: process.env.PORT || 3001
    },

    DB_URI:{
        db_uri: process.env.DB_URI
    },

    secret:{
        secretkey: process.env.SECRETKEY || 'secretkey',
        jwt: process.env.JWT || 'jwt'
        }

}