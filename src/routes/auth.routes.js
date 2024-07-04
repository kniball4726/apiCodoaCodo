const express = require('express');
const authController = require('../controllers/auth.controllers')
const authMiddleware = require('../middlewares/auth.middlewares')

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/protected', authMiddleware, (req, res)=>{
    res.status(200).send(`Bienvenid@ ${req.userId}`)
});

module.exports = router;