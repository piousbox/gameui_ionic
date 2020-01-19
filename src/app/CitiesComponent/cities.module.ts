import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CitiesIndexPage } from './CitiesIndex.page';
import { CitiesShowPage } from './CitiesShow.page';
import { CitiesComponent2 } from './comp2';


const routes: Routes = [
  { path: '', component: CitiesIndexPage, },
  { path: 'travel-to/:city_name',     component: CitiesShowPage,  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ CitiesIndexPage, CitiesShowPage, CitiesComponent2 ]
})
export class CitiesModule {}
