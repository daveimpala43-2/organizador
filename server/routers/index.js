const express = require('express');
const router = express.Router();

//controladores
const AuthControl = require('../controllers/Auth');
const CardControl = require('../controllers/Card');

router.post('/signin', AuthControl.signIn);

router.post('/create-card', CardControl.create)

module.exports = router