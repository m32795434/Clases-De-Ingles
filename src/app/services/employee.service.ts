import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

URL_API = 'http://localhost:3000/api/employees';

employees ?: Employee[];

  constructor(private http:HttpClient ) { }

  getEmployees() {
    return this.http.get<Employee[]>(this.URL_API);
  }
}
