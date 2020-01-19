import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';  
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

// @NgModule({})class NativeStorageMock {}

import { AccountPage } from './account.page';

fdescribe('AccountPage', () => {
  let component: AccountPage;
  let fixture: ComponentFixture<AccountPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPage ],
      imports: [
        HttpClientTestingModule, 
      ],
      providers: [ NativeStorage, Platform,
        { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(AccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        HttpClientTestingModule, NativeStorage, 
      ],
      providers: [
        { provide: NativeStorage, useClass: NativeStorageMock },
      ],
    })
    .compileComponents();
  })); */

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
