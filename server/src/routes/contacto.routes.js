//I build an express router. An "object" with routes.

const express = require('express');
//I define the router.
const router = express.Router();

const contactoCtrl = require('../controllers/contacto.controllers.js')

//precede prefix: "/api/contacto"
router.post('/', contactoCtrl.createContacto);
router.get('/', contactoCtrl.getContactos);
router.delete('/:id', contactoCtrl.deleteContacto);


module.exports = router;