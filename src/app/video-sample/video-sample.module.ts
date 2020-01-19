import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';

import { VideoSamplePage } from './video-sample.page';

const routes: Routes = [
  {
    path: '',
    component: VideoSamplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VideoSamplePage],
  providers: [ StreamingMedia ],
})
export class VideoSamplePageModule {}
