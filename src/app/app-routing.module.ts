import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'account',   loadChildren: './account/account.module#AccountPageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
  { path: 'en/cities', loadChildren: './CitiesComponent/cities.module#CitiesModule' },
  { path: 'home',  loadChildren: './pages/home/home.module#HomePageModule' },

  { path: 'homefeed',  loadChildren: './homefeed/homefeed.module#HomefeedPageModule' },
  { path: 'newsfeed',  loadChildren: './newsfeed/newsfeed.module#NewsfeedPageModule' },
  { path: 'legal', loadChildren: './pages/legal/legal.module#LegalPageModule' },

  { path: 'navigator', loadChildren: './main-navigator/main-navigator.module#MainNavigatorModule' },
  { path: 'navigator/:extra', loadChildren: './main-navigator/main-navigator.module#MainNavigatorModule' },

  { path: 'page1', loadChildren: './main-navigator/page1/page1.module#Page1PageModule' },
  { path: 'page3', loadChildren: './main-navigator/page3/page3.module#Page3PageModule' },
  { path: 'pages/faq', loadChildren: './pages/faq/faq.module#FaqPageModule' },

  { path: 'video-sample', loadChildren: './video-sample/video-sample.module#VideoSamplePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
