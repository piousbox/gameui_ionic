import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSamplePage } from './video-sample.page';

describe('VideoSamplePage', () => {
  let component: VideoSamplePage;
  let fixture: ComponentFixture<VideoSamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
