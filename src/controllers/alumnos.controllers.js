const validator = require('validator')
const Usuario = require('../../src/models/Usuario')
const nosql = require('../../config/db/nosql')
const db = nosql;

const getTodo = (req, res) =>{
    /*db.query("SELECT * FROM alumnos", (err, results) =>{
        if(err){
            res.status(500).send({message: 'Error al obtener los datos'})
            } else {
                res.json(results)
                }})*/

    const datos = req.body;

    return res.status(200).json({
        mensaje: 'Alumno guardado con exito',
        datos
     })

     const usuario = new Usuario(datos);
     usuario.save((err, usuario) => {
        if(err){
            return res.status(500).send({message: 'Error al guardar el usuario'})
            } else {
                return res.json(usuario)
                }})

}

const getUno = (req, res) =>{
    const id = req.params.id
    db.query("SELECT * FROM alumnos WHERE id = ? ", [id], (err, results) =>{
        if(err){
            res.status(500).send({message: 'Error al obtener los datos'})
            } else {
                res.json()
                }})
                }

const create = (req, res) =>{
    const {nombre, dni, correo, telefono, profesor, comision, curso} = req.body
    const results = {nombre, dni, correo, telefono, profesor, comision, curso}

    db.query("INSERT INTO alumnos SET ?", datos, (err, results) =>{
        if(err){
            res.status(500).send({message: 'Error al crear el registro'})
            } else {
                res.json({message: 'Registro creado con éxito',
                    results})
                }})
                }

const update = (req, res) =>{
    const id = req.params.id
    const {nombre, apellido, correo, telefono, profesor, comision, curso} = req.body
    const results = [ {nombre, apellido, correo, telefono, profesor, comision, curso}, id ]

    db.query("UPDATE alumnos SET ? WHERE id = ?", datos, (err, results) =>{
            if(err){
                res.status(500).send({message: 'Error al actualizar el registro'})
                } else {
                    res.json({message: 'Registro actualizado con éxito',
                        results})
                    }})
                    }

const deleteUno = (req, res) =>{
    const id = req.params.id
    const sql = "DELETE FROM alumnos WHERE id = ?"

    db.query(sql, id, (err, results) =>{
        if(err){
            res.status(500).send({message: 'Error al eliminar el registro'})
            } else {
                res.json({message: 'Registro eliminado con éxito',
                    results})
                }})
}


module.exports = {
    getTodo,
    getUno,
    create,
    update,
    deleteUno
}
