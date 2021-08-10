import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Contacto} from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  URL_API = 'http://localhost:3000/api/contacto';

  selectedContacto: Contacto = {
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
  }