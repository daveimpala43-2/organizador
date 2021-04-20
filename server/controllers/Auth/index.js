require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//model
const userModel = require('../../db/models/userModel');

const AuthController = {};


AuthController.signIn = async (req,res) =>{
    const {email, password} = req.body;
    const user = await userModel.findOne({email});
    console.log(user);
    if(!user) return res.status(401).send("No se encontro una cuenta relacionada con ese email");
    if(!bcrypt.compareSync(password, user.password)) return res.status(401).send("El correo y/o contraseña estan incorrectos");
    const token = (jwt.sign({_id:user.id}, process.env.ACCEPT_TOKEN,{expiresIn:120}))
    const refToken = jwt.sign({_id: user._id},process.env.REFRESH_TOKEN,{expiresIn:1200})
    res.status(200).json({token,refToken})
}

module.exports = AuthController;