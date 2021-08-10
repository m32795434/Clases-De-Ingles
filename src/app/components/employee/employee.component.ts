import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {




  constructor(private employeService: EmployeeService) { }

  ngOnInit(): void {}

  getEmployees(){
    this.employeService.getEmployees().subscribe(
        res => {
          this.employeService.employees = res;
        },
        err => console.error(err)
      )
    }
}
