import { Component, OnInit, Input } from '@angular/core';

import { Holiday } from '../holiday';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {
   @Input() holidayList: Holiday[];

  constructor() { }

  ngOnInit() {
  }

  

}
