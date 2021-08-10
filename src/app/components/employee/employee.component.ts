import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeService.getEmployees()
    {}
  }
}
