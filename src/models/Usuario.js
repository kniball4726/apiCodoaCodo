const {Schema, model} = require('mongoose')

const UsuarioSchema = Schema({
    username:{
        type: String,
        required: true,
        unique: true
        },
    password:{
        type: String,
        required: true
        },
    email:{
        type: String,
        required: true,
        unique: true
        },
    imagen:{
        type: String,
        default: 'default.png'
    },
    fecha:{
        type: Date,
        default: Date.now
    }
})

module.exports = model('Usuario', UsuarioSchema, 'usuarios')