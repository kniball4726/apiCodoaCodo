const {Schema, model} = require('mongoose')

const RegistroSchema = Schema({
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
    }
})

module.exports = model('Registro', RegistroSchema, 'registros')