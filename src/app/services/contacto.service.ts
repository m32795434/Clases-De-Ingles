//CONNECTION TO CONTACTO API ROUTES.

import { Injectable } from '@angular/core';
//to interactuate with http requests (get, post, put, delete)
import {HttpClient} from '@angular/common/http'
import {Contacto} from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  URL_API = 'http://localhost:3000/api/contacto';

  selectedContacto: Contacto = {
    _id: '',
    nombre: '',
    email: '',
    edad: '',
    pais: '',
    comentario: ''
  };
  contacto!: Contacto[];
  
    constructor(private http:HttpClient ) { }
  
    getContacto() {
      return this.http.get<Contacto[]>(this.URL_API);
    }
  
    createContacto(contacto: Contacto) {
  return this.http.post(this.URL_API, contacto);
  }
  deleteContacto(_id: string) {
    // delete http://localhost:3000/api/contacto/_id
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}