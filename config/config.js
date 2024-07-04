require('dotenv').config();

module.exports = {

    secretkey: process.env.SECRETKEY,
    tokenExpiresIn: '10m',

    port:{
        port: process.env.PORT || 3001
    },

    mysql:{
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'cac'
    },
    secret:{
        secretkey: process.env.SECRETKEY || 'secretkey',
        jwt: process.env.JWT || 'jwt',
        jwtsecret: process.env.JWTSECRET || 'jwtsecret',
        jwtexp: process.env.JWTEXP || 3600,
        jwtrefresh: process.env.JWTREFRESH || 3600,
        jwtrefreshexp: process.env.JWTREFRESHEXP || 3600,
        jwtrefreshsecret: process.env.JWTREFRESHSECRET || 'jwtrefreshsecret',
        jwtrefreshexp: process.env.JWTREFRESHEXP || 3600,
        }

}