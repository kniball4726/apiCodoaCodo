const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const Usuario = require('../models/Usuario')
const config = require('../../config/config');

exports.register = (req, res) =>{

    const datos = req.body

    const hashedPassword = bcrypt.hashSync(datos.password, 8);

    const usuario = new Usuario({
        username: datos.username,
        password: hashedPassword,
        email: datos.email,
    });
    
        usuario.save((error, usuarioGuardado) => {
            if(error || !usuarioGuardado){
                res.status(500).json({
                    status: 'error',
                    message: 'No se ha creado el usuario'})
                }
            return res.status(200).json({
                status: 'success',
                message: 'Usuario creado correctamente',
                data: usuarioGuardado
                
            })
        })


            
        const token = jwt.sign({id: usuario.id},
            config.secretkey, {expiresIn: config.tokenExpiresIn}
        )

        res.status(201).send({auth: true, token})
}

exports.login = (req,res) =>{
    const {username, password} = req.body
    const user = users.find(u => u.username === username)

    if(!user) return res.status(404).send('Usuario no encontrado') 
        const passwordisvalid = bcrypt.compareSync(password, user.password)

    if(!passwordisvalid) return res.status(404).send({auth: false, token: null})
        const token = jwt.sign({id: user.id}, config.secretkey, {expiresIn: config.tokenExpiresIn})
        res.status(200).send({auth: true, token})
        
    }
