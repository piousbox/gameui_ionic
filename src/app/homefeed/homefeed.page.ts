import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AppRouter, ApiRouter } from '../app-router';
import { AppService } from '../app-service';
import { environment } from '../../environments/environment';

import { C } from '../const';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './homefeed.page.html',
  styleUrls: ['./homefeed.page.scss'],
})
export class HomefeedPage implements OnInit {
  newsitems: any = [];
  mainTitle: string = '';

  constructor(
    private appService: AppService,
    private nativeStorage: NativeStorage,
    private router: Router,
    public httpClient: HttpClient, 
    public toastController: ToastController,
  ) {
    appService.setTitle('Homefeed');
    this.mainTitle = 'Homefeed';

    const answer = this.httpClient.get(ApiRouter.homefeed)
    answer.subscribe(data => {
      if (data['newsitems']) {
        this.newsitems = data['newsitems'];
      }
    }, async error => {
      console.log('+++ homefeed 1:', JSON.stringify(error))
      const toast = await this.toastController.create({
        message: error,
        duration: 2000
      });
      toast.present();
    });

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit () {
    this.appService.currentMessage.subscribe( message => {
      console.log('+++ new message:', message)
      if (message == C.didLogin) {
        this.render();
      }
    });
  }

  render () {
    const answer = this.httpClient.get(ApiRouter.homefeed)
    answer.subscribe(data => {
      if (data['newsitems']) {
        this.newsitems = data['newsitems'];
      }
    }, async error => {
      console.log('+++ error from m3 -2:', JSON.stringify(error))
      const toast = await this.toastController.create({
        message: error, duration: 2000
      });
      toast.present();
    });
  }

  ionViewDidLoad () {
    console.log('+++ homefeed ionViewDidLoad');
  }

}
