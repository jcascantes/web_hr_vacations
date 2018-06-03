import { Injectable } from '@angular/core';
import { Holiday } from './holiday';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  holidayList: Holiday[] = [{
    EmployeeId:1,
    StartDate: Date.now(),
    EndDate: Date.now()
  },
  {
    EmployeeId:1,
    StartDate: Date.now() - 1000,
    EndDate: Date.now() - 100
  }];

  constructor() { }


  getHolidayList(Id: string): Observable<Holiday[]>
  {
    return of(this.holidayList);
  }
}
