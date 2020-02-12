import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppModule } from '../app.module';
import { HomefeedPage } from './homefeed.page';
import { LayoutSidemenuModule } from '../LayoutSidemenu/LayoutSidemenu.module';
import { NewsfeedPage } from './newsfeed.page';
import { NewsitemsList } from './newsitems.list';

const routes: Routes = [
  { path: '', component: HomefeedPage },
  { path: 'news', component: NewsfeedPage },
];

@NgModule({
  declarations: [ HomefeedPage, NewsfeedPage, NewsitemsList, ],
  exports: [ NewsitemsList ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutSidemenuModule,
    RouterModule.forChild(routes)
  ],
})
export class NewsitemsModule {}