//SERVER LOGIC
const express = require('express'); 
// middelware.To see server http requests(PUT, POST, GET, DELETE). ej:GET /404 0.261 ms - 139
const morgan = require('morgan');
//to accept requests from other origins.
const cors = require('cors');


const app = express();
// process.env.PORT: if in the O.S. there is a port defined for this app, it uses that; if not, it uses the 3000 
app.set('port', process.env.PORT || 3000);
// aqui puedo decir que puerto aceptar
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use("/api/contacto" ,require('./routes/contacto.routes'));

module.exports = app;