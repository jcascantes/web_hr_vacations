import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { HolidayService } from '../services/holiday.service';
import { Employee } from '../entities/employee';
import { Holiday } from '../entities/holiday';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  newEmployee: Employee = {Id:0, FirstName: '', LastName:'', Status:'A', StartDate:0};
  currentEmployee: Employee = this.newEmployee;
  edit: true;
  message: string;
  holidayList: Holiday[];
  
  constructor(private employeeService: EmployeeService, 
    private holidayService: HolidayService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getEmployee(id);
    
  }

  getEmployee(id: number): void{
    this.employeeService.getEmployee(id)
    .subscribe(employee => this.currentEmployee = employee);
  }

  public editModeClicked(event,item):void{
    this.edit = true;
  }

  public loadHolidaysClicked(event, item):void{
    this.getHolidaysForEmployee(this.currentEmployee.Id);
  }

  public saveClicked(event, item):void{
    this.employeeService.createEmployee(this.newEmployee)
    .subscribe((result) => this.message = 'Employee successfuly saved',
                error => this.message = 'Error saving employee'
              );
  }

  getHolidaysForEmployee(employeeId: number): void{
    this.holidayService.getHolidayList(employeeId)
    .subscribe(holidayList => this.holidayList = holidayList);
}

}
