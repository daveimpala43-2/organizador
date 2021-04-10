require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL,{
    user:process.env.DB_USER,
    pass:process.env.DB_PASSWORD,
    dbName:process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(db=>console.log("Mongodb on"))
.catch(err=>console.log("Mongodb Error: "+err))

module.exports = mongoose