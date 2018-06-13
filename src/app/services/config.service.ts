import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private employeeServiceUrlDev = 'https://wkdoks1x24.execute-api.us-east-2.amazonaws.com/dev/';
  //ToDo: To be replaced later 
  private environment = 'dev';
  
  constructor() { }

  getServiceUrl() {
    if(this.environment == 'dev')
    {
      return this.employeeServiceUrlDev;
    }
  }
}
