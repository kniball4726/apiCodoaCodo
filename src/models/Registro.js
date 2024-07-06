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
        }
})

module.exports = model('Registro', RegistroSchema, 'registros')