const {connection} = require('../../config/db/db')
const db = connection;

const getTodo = (req, res) =>{
    const sql = "SELECT * FROM profesor"

    db.query(sql, (err, datos) =>{
        if(err){
            res.status(500).send({message: 'Error al obtener los datos'})
            } else {
                res.json(datos)
                }})
}

const getUno = (req, res) =>{
    const id = req.params.id
    const sql = "SELECT * FROM profesor WHERE id = ?"

    db.query(sql, id, (err, datos) =>{
        if(err){
            res.status(500).send({message: 'Error al obtener el dato'})
            } else {
                res.json(datos)
                }})
}


const create = (req, res) =>{
    const {profesor, dni, correo, telefono } = req.body
    const sql = "INSERT INTO profesor SET ?"
    const datos = {profesor, dni, correo, telefono}

    db.query(sql, datos, (err, datos) =>{
        if(err){
            res.status(500).send({message: 'Error al crear el registro'})
            } else {
                res.json({message: 'Registro creado con éxito',
                    datos})
                }})
                }

const update = (req, res) =>{
    const id = req.params.id
    const {profesor, dni, correo, telefono} = req.body
    const sql = "UPDATE profesor SET ? WHERE id = ?"
    const datos = [ {profesor, dni, correo, telefono}, id ]

    db.query(sql, datos, (err, datos) =>{
            if(err){
                res.status(500).send({message: 'Error al actualizar el registro'})
                } else {
                    res.json({message: 'Registro actualizado con éxito',
                        datos})
                    }})
                    }

const deleteUno = (req, res) =>{
    const id = req.params.id
    const sql = "DELETE FROM profesor WHERE id = ?"

    db.query(sql, id, (err, datos) =>{
        if(err){
            res.status(500).send({message: 'Error al eliminar el registro'})
            } else {
                res.json({message: 'Registro eliminado con éxito',
                    datos})
                }})
}


module.exports = {
    getTodo,
    getUno,
    create,
    update,
    deleteUno
}
