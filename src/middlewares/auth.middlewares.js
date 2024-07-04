const jwt = require('jsonwebtoken')
const config = require('../../config/config')

module.exports = (req, res, next) => {
    const authHeader = req.headers
    
    ['Authorization']

    if(!authHeader) return res.status(404).send({auth: false, message: 'No se encontro token'})

    const token = authHeader.split(' ')[1]

    if(!token) return res.status(404).send({auth: false, message: 'token mal formado'})

    jwt.verify(token, config.secretkey, (err, decoded) => {
        if(err) return res.status(500).send({auth: false, message: 'falla de autorización de token'})
        
            req.userId = decoded.id
            next()
        })
}