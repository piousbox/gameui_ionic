import { HttpClient, HttpParams, } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { Platform } from '@ionic/angular';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AppService } from '../app-service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  currentUser: any = {};

  constructor(
    private appService: AppService,
    private httpClient: HttpClient, 
    private nativeStorage: NativeStorage,
    private platform: Platform,
    private router: Router,
  ) {
    console.log('+++ account constructor');    

    /* this.platform.ready().then(() => {
      this.appService.setTitle('Account');
    }); */

    console.log('+++ account constructor 1');

    /* this.nativeStorage.getItem('current_user').then(data => {
      console.log('+++ 1 data:', data)

      if ('facebook' == data.type) {
        const params = new HttpParams().set('accessToken', data.accessToken)
        const answer = this.httpClient.get(environment.accountPath, { params: params })
        answer.subscribe(data => {
          console.log('+++ data:', data);

          this.currentUser = data;
        }, error => {
          console.log('+++ error from m3 a:', JSON.stringify(error))
        });
      }
    }) */

    // This craps out in Jasmine
    /* router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
      // Instance of should be: 
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    }); */
  }

  navigate(where) {
    this.router.navigate([where]);
  }

  ngOnInit() {
    // console.log('+++ account ngOnInit');
    /* this.platform.ready().then(() => {
      this.appService.setTitle('Account');
    }); */
  }

}
