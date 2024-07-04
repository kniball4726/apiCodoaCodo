const express = require('express');
const calumnos = require('../controllers/alumnos.controllers')
const ccomision = require('../controllers/comision.controllers')
const ccurso = require('../controllers/curso.controllers')
const cprofesor = require('../controllers/profesor.controllers')
const router = express.Router();

//Rutas alumnos
router.get("/alumnos/",calumnos.getTodo);
router.get("/alumnos/:id",calumnos.getUno);
router.post("/alumnos",calumnos.create);
router.put("/alumnos/:id([0-9])",calumnos.update);
router.delete("/alumnos/:id",calumnos.deleteUno);

//Rutas Comision
router.get("/comision",ccomision.getTodo);
router.get("/comision/:id",ccomision.getUno);
router.post("/comision",ccomision.create);
router.put("/comision/:id",ccomision.update);
router.delete("/comision/:id",ccomision.deleteUno);

//Rutas Cursos
router.get("/curso",ccurso.getTodo);
router.get("/curso/:id",ccurso.getUno);
router.post("/curso",ccurso.create);
router.put("/curso/:id",ccurso.update);
router.delete("/curso/:id",ccurso.deleteUno);

//Rutas Profesor
router.get("/profesor",cprofesor.getTodo);
router.get("/profesor/:id",cprofesor.getUno);
router.post("/profesor",cprofesor.create);
router.put("/profesor/:id",cprofesor.update);
router.delete("/profesor/:id",cprofesor.deleteUno);

module.exports = router;