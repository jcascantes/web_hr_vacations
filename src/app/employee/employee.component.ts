import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { HolidayService } from '../services/holiday.service';
import { Employee } from '../entities/employee';
import { Holiday } from '../entities/holiday';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { pipe } from '@angular/core/src/render3/pipe';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  newEmployee: Employee = {Id:0, FirstName: '', LastName:'', Status:'A', StartDate: Date.now()};
  currentEmployee: Employee = this.newEmployee;
  edit: boolean;
  create: boolean;
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

  public createModeClicked(event,item):void{
    this.create = true;
  }

  public editModeClicked(event,item):void{
    this.edit = true;
    this.newEmployee = this.currentEmployee;
  }

  public loadHolidaysClicked(event, item):void{
    this.getHolidaysForEmployee(this.currentEmployee.Id);
  }

  public saveClicked(event, item):void{
    if(this.validate(this.newEmployee)){
      if(this.create){
          this.employeeService.createEmployee(this.newEmployee)
          .subscribe(result => this.newEmployee = result,
                      error => this.message = 'Error saving employee' + JSON.parse(error)
                    );
      }else if(this.edit){
        this.employeeService.updateEmployee(this.newEmployee)
        .subscribe(result => this.currentEmployee = result
        );
      }
    }else{
      this.message = 'Validation error';
    }
  }

  public cancelClicked(event, item){
    this.create = false;
    this.edit = false;
  }

  getHolidaysForEmployee(employeeId: number): void{
    this.holidayService.getHolidayList(employeeId)
    .subscribe(holidayList => this.holidayList = holidayList);
  }

  validate(employee: Employee): boolean{
    return employee.Id > 0 && employee.FirstName.length > 0 
    && employee.LastName.length > 0;
  }

}
