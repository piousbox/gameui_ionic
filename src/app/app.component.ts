import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, } from '@angular/common/http';

import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppRouter } from './app-router';
import { AppService } from './app-service'

// prod/non-prod
// const FB = { init: (a={}) => {} }

function logg(object, label='') {
  console.log('+++ '+label)
  console.log(JSON.stringify(object))
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  env: string = '<none>';
  currentUser: any = null;
  currentUserStr: string = '<none>';
  mainTitle: string = '';
  mainFooterVisible: string = '';

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
  ) {
    // console.log('+++ app.component constructor', environment);
    this.render = this.render.bind( this );

    this.initializeApp();
    
    this.mainTitle = this.appService.title;
    this.env = JSON.stringify(environment);
    
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

  doFacebookLogin () {
    if (this.platform.is('cordova')) {
      /* try {
        FB.init({ appId: '3016949928380365',
          xfbml: true,
          version: 'v2.8',
        });
      } catch (e) {
        logg(e, '+++ no name FB:')
      } */

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
          this.router.navigate([ AppRouter.rootPath ])
        }, (error) => {
          console.log('+++ error:', error)
        })
      }).then(this.render).catch(e => console.log('Error logging into Facebook', e));
    } else {
      console.log('+++ cordova not available, falling back on nothing!')
      this.fb.login(['public_profile', 'email']).then((res: any) => { 
        const data = res.authResponse
        logg('+++ Logged into Facebook 2', data)
      })
    }
  }

  doFacebookLogout () {
    console.log('+++ logging out facebook...');
    // this.nativeStorage.remove('facebook_user');
    this.nativeStorage.remove('current_user');
    // this.currentUser = null;
    // this.currentUserStr = null;
    this.render();
    // this.nativeStorage.clear();
    // this.fb.logout();
  }

  ngOnInit () {
    console.log('+++ app.component ngOnInit:', this)
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
