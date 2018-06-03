import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  currentEmployee: Employee;
  newEmployee: Employee = {Id:0, Name:'', Status:'A', StartDate:0};
  edit: true;
  message: string;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployee(1);
  }

  getEmployee(id: number): void{
    this.employeeService.getEmployee(id)
    .subscribe(employee => this.currentEmployee = employee);
  }

  public editModeClicked(event,item):void{
    this.edit = true;
  }

  public saveClicked(event, item):void{
    this.employeeService.createEmployee(this.newEmployee)
    .subscribe((result) => this.message = 'Employee successfuly saved',
                error => this.message = 'Error saving employee'
              );
  }

}
