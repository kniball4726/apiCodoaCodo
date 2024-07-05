const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const user = require('../models/user.model')
const config = require('../../config/config');

exports.register = (req, res) =>{
    const hashedPassword = bcrypt.hashSync(password, 8);

    const newUser = {id: users.length + 1,
        username, password: hashedPassword}
        users.push(newUser);
        res.json({message: 'User registered successfully!'});

        const token = jwt.sign({id: newUser.id},
            config.secretkey, {expiresIn: config.tokenExpiresIn}
        )

        res.status(201).send({auth: true, token})
}

exports.login = (req,res) =>{
    const {username, password} = req.body
    const user = users.find(u => u.username === username)

    if(!user) return res.status(404).send('Uuario no encontrado') 
        const passwordisvalid = bcrypt.compareSync(password, user.password)

    if(!passwordisvalid) return res.status(404).send({auth: false, token: null})
        const token = jwt.sign({id: user.id}, config.secretkey, {expiresIn: config.tokenExpiresIn})
        res.status(200).send({auth: true, token})
        
    }
