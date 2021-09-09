//LOGICAL CONTROLLER FUNCTIONS 


const contactoCtrl = {}
const Fcontacto = require('../models/Fcontacto')

//req: api-rest client request //contactoCtrl's method name: createContacto
contactoCtrl.createContacto = async (req, res, next)=> {
    const newContacto = new Fcontacto({
        nombre: req.body.nombre,
        email: req.body.email,
        edad: req.body.edad,
        pais: req.body.pais,
        comentario: req.body.comentario,
      });
    await newContacto.save();
    res.json({status:"Contacto enviado"});
} 
contactoCtrl.getContactos = async (req, res, next)=> {
    const contactos =  await Fcontacto.find()
    res.json(contactos)
}
contactoCtrl.deleteContacto = async (req, res, next)=> {
    await Fcontacto.findByIdAndRemove(req.params.id)
    res.json({status:"Contacto Eliminado"});
}

module.exports = contactoCtrl;