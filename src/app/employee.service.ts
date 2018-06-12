import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ConfigService } from './config.service'; 
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private http: HttpClient, private config: ConfigService) { }


 getEmployee(id: number): Observable<Employee>{
     return this.http.get<string>(this.config.getServiceUrl()+ 'employee/' + id.toString())
     .pipe(
       map(body => JSON.parse(body))
     );     
 }

 createEmployee(newEmployee: Employee): Observable<boolean> {
  return of(true);
 }
}
