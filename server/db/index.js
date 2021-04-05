const mongoose = require('mongoose');

const URI = "mongodb://localhost/organizador";

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(db=>console.log("Mongodb on"))
.catch(err=>console.log("Mongodb Error: "+err))

module.exports = mongoose