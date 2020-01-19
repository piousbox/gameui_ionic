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
  selector: 'app-cities-index',
  templateUrl: './CitiesIndex.page.html',
})
export class CitiesIndexPage implements OnInit {
    cities: any = [];
  constructor(
    private nativeStorage: NativeStorage,
    private appService: AppService,
    private router: Router,
    public httpClient: HttpClient, 
    public toastController: ToastController,
  ) {
      const answer = this.httpClient.get(ApiRouter.citiesindex)
    answer.subscribe(data => {
      if (data) {
        this.cities = data;
      }
    }, async error => {
      console.log('+++ citiesindex 1:', JSON.stringify(error))
      const toast = await this.toastController.create({
        message: error,
        duration: 2000
      });
      toast.present();
    });
  }
    
render(){
    const answer = this.httpClient.get(ApiRouter.citiesindex)
    answer.subscribe(data => {
      if (data['newsitems']) {
        this.cities = data['newsitems'];
      }
    }, async error => {
      console.log('+++ citiesindex 1:', JSON.stringify(error))
      const toast = await this.toastController.create({
        message: error,
        duration: 2000
      });
      toast.present();
    });
}    
  navigate(where) {
    this.router.navigate([where]);
  }
    
  ngOnInit() {
      this.appService.currentMessage.subscribe( message => {
      console.log('+++ new message:', message)
      if (message == C.didLogin) {
        this.render();
      }
    });
  }
}
