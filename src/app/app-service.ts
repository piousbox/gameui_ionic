import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  title: string = 'Initial Title';

  constructor() { }

  /* getTitle () {
    this.title = 'Some Title';
  } */

  setTitle (which) {
    console.log('+++ app-service setTitle:', which);
    this.title = which;
  }

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  
}
