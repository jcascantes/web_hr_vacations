import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { DatePipe } from '@angular/common';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  constructor() { }

  employee : Employee = {
    Id: 1,
    Name: 'Jose',
    StartDate: Date.now(),
    Status: 'A'
  };

 getEmployee(id: number): Observable<Employee>{
     return of(this.employee);
 }

 createEmployee(newEmployee: Employee): Observable<boolean> {
  return of(true);
 }

 

}
