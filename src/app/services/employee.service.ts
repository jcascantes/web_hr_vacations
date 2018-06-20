import { Injectable } from '@angular/core';
import { Employee } from '../entities/employee';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service'; 
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  constructor(private http: HttpClient, private config: ConfigService) { }


 getEmployee(id: number): Observable<Employee>{
     return this.http.get<string>(this.config.getServiceUrl() + 'employee/' + id.toString())
     .pipe(
       map(body => JSON.parse(body))
     );     
 }

 getEmployees(): Observable<Employee[]>{
   return this.http.get<string>(this.config.getServiceUrl() + 'employees')
   .pipe(
      map(body => JSON.parse(body))
   );
 }

 createEmployee(newEmployee: Employee): Observable<Employee> {
  return this.http.post<string>(this.config.getServiceUrl() + 'employee', JSON.stringify(newEmployee))
  .pipe(
    map(body => JSON.parse(body))
  );
 }

 updateEmployee(existingEmployee: Employee): Observable<Employee> {
   return this.http.patch<string>(this.config.getServiceUrl() + 'employee', JSON.stringify(existingEmployee))
   .pipe(
     map(body => JSON.parse(body))
   );
 }

 /*private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};*/
}
