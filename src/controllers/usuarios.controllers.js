const Usuario = require('../../src/models/Usuario')

const create = (req, res) =>{
    const datos = req.body;

     const usuario = new Usuario(datos);
     usuario.save((err, usuario) => {
        if(err){
            return res.status(500).send({message: 'Error al guardar el usuario'})
        } else {
            return res.status(200).json({
            status: 'success',
            mensaje: 'Alumno guardado con exito',
            usuario})}
        })}


module.exports = {
    create
}
