const {connection} = require('../../config/db/db')
const db = connection;

const getTodo = (req, res) =>{
    const sql = "SELECT * FROM curso"

    db.query(sql, (err, datos) =>{
        if(err){
            res.status(500).send({message: 'Error al obtener los datos'})
            } else {
                res.json(datos)
                }})
}

const getUno = (req, res) =>{
    const id = req.params.id
    const sql = "SELECT * FROM curso WHERE id = ?"

    db.query(sql, id, (err, datos) =>{
        if(err){
            res.status(500).send({message: 'Error al obtener el dato'})
            } else {
                res.json(datos)
                }})
}


const create = (req, res) =>{
    const {curso, nombre} = req.body
    const sql = "INSERT INTO curso SET ?"
    const datos = {curso, nombre}

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
    const {curso, nombre} = req.body
    const sql = "UPDATE curso SET ? WHERE id = ?"
    const datos = [ {curso, nombre}, id ]

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
    const sql = "DELETE FROM curso WHERE id = ?"

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
