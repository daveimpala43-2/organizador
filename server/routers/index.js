const express = require('express');
const router = express.Router();

//controladores
const AuthControl = require('../controllers/AuthController');

router.post('/signin', AuthControl.signIn);

module.exports = router