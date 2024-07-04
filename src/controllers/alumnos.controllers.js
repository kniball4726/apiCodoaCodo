const {connection} = require('../../config/db/db')
const db = connection;

const getTodo = (req, res) =>{
    db.query("SELECT * FROM alumnos", (err, results) =>{
        if(err){
            res.status(500).send({message: 'Error al obtener los datos'})
            } else {
                res.json(results)
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
    const {nombre, correo, telefono, profesor, comision, curso} = req.body
    const results = {nombre, correo, telefono, profesor, comision, curso}

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
