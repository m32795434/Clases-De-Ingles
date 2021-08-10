const express = require('express'); 
const morgan = require('morgan');
const cors = require('cors');


const app = express();
app.set('port', process.env.PORT || 3000);

// aqui puedo decir que puerto aceptar
app.use(cors());

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/employees" ,require('./routes/employees.routes'));
app.use("/api/contacto" ,require('./routes/contacto.routes'));

module.exports = app;