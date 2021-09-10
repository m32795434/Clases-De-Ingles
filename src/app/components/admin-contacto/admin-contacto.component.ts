import { Component, OnInit } from '@angular/core';
import { ContactoService } from "../../services/contacto.service";

@Component({
  selector: 'app-admin-contacto',
  templateUrl: './admin-contacto.component.html',
  styleUrls: ['./admin-contacto.component.scss']
})
export class AdminContactoComponent implements OnInit {

  constructor(public contactoService: ContactoService) { }

  ngOnInit(): void {
    this.getContacto();
  }

  getContacto(){
    this.contactoService.getContacto().subscribe(
        res => {
          this.contactoService.contacto = res;
        },
        err => console.error(err)
      )}

  deleteContacto(_id: string) {
    if (confirm('Are you sure you want to delete this contacto?')) {
      this.contactoService.deleteContacto(_id).subscribe(
        (res) => {
          this.getContacto();
          console.log(res);
        },
        (err) => console.error(err)
      );
    }
  }
}
