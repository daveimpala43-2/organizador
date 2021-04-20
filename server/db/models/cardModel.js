const {Schema, model} = require("mongoose");

const CardSchema = new Schema({
    title:{type:String,required:true},
    description:{type:String, required:false},
    alert:{type:Boolean, required:true, default:false},
    date:{type:Date, required:true},
    dateCreation:{type:Date, required:true},
    color:{type:String,required:true, default:"grey"}
})

module.exports = model("Card", CardSchema)