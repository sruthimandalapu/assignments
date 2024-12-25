import { Component } from '@angular/core';
import {EmployeeService} from '../employee.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  employees:any[];
  constructor(){
    this.employees=(new EmployeeService()).getEmployees();
  }
}
