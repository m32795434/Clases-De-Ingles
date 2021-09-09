//DATABASE CONEXION

const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/ClasesDI-Contacto",{
    //we delete the warnigns messages
    useUnifiedTopology: true,
    useNewUrlParser: true,
    //without this property, findByIdAndUpdate() will not work
    useFindAndModify: false,
    })
    .then((db)=>console.log('DB is connected'))
    .catch((err)=>console.error(err));
module.exports = mongoose;