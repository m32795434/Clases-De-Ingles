import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(public contactoService: ContactoService) {}

  ngOnInit(): void {}

  addContacto(form: NgForm) {
    this.contactoService.createContacto(form.value).subscribe(
      (res) => {
        console.log(res);
        form.reset();
      },
      (err) => console.error(err)
    );
  }
}
