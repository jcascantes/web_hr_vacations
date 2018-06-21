import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';

const routes : Routes = [
  {path: '', redirectTo: '/employees', pathMatch:'full'},
  {path: 'employee/:id', component: EmployeeComponent},
  {path: 'employees', component: EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
