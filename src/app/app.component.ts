import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, } from '@angular/common/http';

import { MenuController, ToastController, } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppRouter } from './app-router';
import { AppService } from './app-service';
import { C } from './const';

function logg(object, label='') {
  console.log(`+++ ${label}`)
  console.log(JSON.stringify(object))
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentUser: any = null;
  currentUserStr: string = '<none>';

  env: string = '<none>';

  isApp: boolean = true;

  mainTitle: string = '';
  mainFooterVisible: string = '';
  message: string;

  platformList: string = '';
  
  constructor(
    private appService: AppService,
    private fb: Facebook,
    private menu: MenuController,
    private nativeStorage: NativeStorage,
    private ngZone: NgZone,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public httpClient: HttpClient,
    public loadingController: LoadingController,
    public toastController: ToastController,
  ) {
    // console.log('+++ app.component constructor', environment);
    this.render = this.render.bind( this );

    this.initializeApp();
    
    this.mainTitle = this.appService.title;
    this.env = JSON.stringify(environment.name);

    let platforms = this.platform.platforms();
    this.platformList = platforms.join(', ');

    if(platforms.indexOf('mobileweb') != -1) {
      this.isApp = false;
    } else {
      this.isApp = true;
    }

    this.platform.ready().then(() => {
      this.nativeStorage.getItem('current_user').then(data => {
        console.log('+++ got 3 data:', JSON.stringify(data));

        this.currentUser = data;
        if (data && Object.keys(data).length > 0) {
          this.currentUserStr = JSON.stringify(Object.keys(data).map( k => `${k}::${data[k].toString().substring(0,10)}` ));
        }
        

        /* if ('facebook' == data.type) {
          const params = new HttpParams().set('accessToken', data.accessToken)
          const answer = this.httpClient.get(environment.newsitemsPath, { params: params })
          answer.subscribe(data => {
            if (data['newsitems']) {
              this.newsitems = data['newsitems'];
            }
          }, error => {
            console.log('+++ error from m3 aa:', error)
          });
        } */

      }, error => {
        console.log('+++ newsfeed doesnt have current_user:', error);
      });
    }); 

  }

  navigate(where) {
    this.ngZone.run(() => {
      console.log('+++ navigating:', where);
      this.mainTitle = where;
      this.router.navigate([where]);
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.nativeStorage.getItem('current_user').then( data => {
        this.router.navigate([ AppRouter.rootPath ]);
        this.splashScreen.hide();
      }, err => {
        // this.router.navigate([ AppRouter.loginPath ]);
        this.router.navigate([ AppRouter.rootPath ]);
        this.splashScreen.hide();
      })
      this.statusBar.styleDefault();
    });
  }

  async doFacebookLogin () {
    this.fb.login(['public_profile', 'email']).then((res: any) => { // res: FacebookLoginResponse      
      const data = res.authResponse
      logg('+++ Logged into Facebook 22', data)

      this.currentUser = data;
      this.currentUserStr = JSON.stringify(Object.keys(data).map( k => `${k}::${data[k].toString().substring(0,10)}` ));

      this.nativeStorage.setItem('current_user', {
        accessToken: data.accessToken,
        signedRequest: data.signedRequest,
        userID: data.userID,
        type: 'facebook',
      }).then(() => {
        this.appService.changeMessage(C.didLogin);
        this.router.navigate([ AppRouter.rootPath ])

      }, (error) => {
        console.log('+++ error:', error)
      })
    }).then(this.render).catch( async e => {
      console.log('Error logging into Facebook', e)
      const toast = await this.toastController.create({ message: 'Could not login.', duration: 2000 });
      toast.present();
    });
  }

  async doFacebookLogout () {
    console.log('+++ logging out facebook...');
    // this.nativeStorage.remove('facebook_user');
    this.nativeStorage.remove('current_user');
    // this.currentUser = null;
    // this.currentUserStr = null;
    this.render();
    // this.nativeStorage.clear();
    // this.fb.logout();
    const toast = await this.toastController.create({ message: 'Logged out.', duration: 2000 });
    toast.present();
  }

  ngOnInit () {
    console.log('+++ app.component ngOnInit:', this)
    this.appService.currentMessage.subscribe(message => this.message = message)
  }

  render () {
    console.log('+++ app.component render()', this);
    this.nativeStorage.getItem('current_user').then( data => {
      this.currentUser    = data;
      this.currentUserStr = JSON.stringify(Object.keys(data).map( k => `${k}::${data[k].toString().substring(0,10)}` ));
    }, err => { 
      this.currentUser    = null;
      this.currentUserStr = null;
    }).catch( e => console.log('+++ render error:', e));
  }

  ionViewDidLoad () {
    console.log('+++ app.component ionViewDidLoad');
  }

  ionViewWillEnter () {
    console.log('+++ app.component ionViewWillEnter');
  }

  ionViewDidEnter () {
    console.log('+++ app.component ionViewDidEnter');
  }

  toggleMainFooter () {
    // console.log('+++ toggle main footer');
    this.mainFooterVisible = this.mainFooterVisible == '' ? 'main-footer-visible' : '';
  }

}
