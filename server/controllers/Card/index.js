require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//model
const cardModel = require('../../db/models/cardModel');

const CardController = {};


CardController.create = async (req,res)=>{
    const {title, description, alert, color, date} = req.body;

    const dateNow = new Date()

    const dataCardInsert = {
        title: title,
        description: description,
        alert: alert,
        date: date,
        dateCreation: dateNow,
        color: color
    }

    const card = new cardModel(dataCardInsert);
    await card.save(function(err){
        if(err){
            console.log(err)
            res.status(401).send("No se pudio registrar la card");
        }
    })
    res.status(201).send("Se registro")
}

module.exports = CardController