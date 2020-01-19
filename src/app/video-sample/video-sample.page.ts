import { Component, OnInit } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';

@Component({
  selector: 'app-video-sample',
  templateUrl: './video-sample.page.html',
  styleUrls: ['./video-sample.page.scss'],
})
export class VideoSamplePage implements OnInit {
  env3: any = {};

  constructor(
    private streamingMedia: StreamingMedia,
  ) {
    // console.log('+++ video-sample constructor');
    
    this.env3 = 'nv3';

    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: false
    };

    this.streamingMedia.playVideo('https://s3.amazonaws.com/tgm-videos/MVI_0061_out.webm', options);
  }

  ngOnInit() {
  }

}
