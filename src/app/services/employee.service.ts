import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

URL_API = 'http://localhost:3000/api/employees';

  constructor(private http:HttpClient ) { }

  getEmployees() {
    return this.http.get(this.URL_API);
  }
}
