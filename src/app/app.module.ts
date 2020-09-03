/**
 |--------------------------------------------------------------
 | Angular Root Module with Dependencies!!
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NetworkModule } from './feature/network/network.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*
* @NgModule decorator with its metadata
*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    NetworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

/**
 * Exporting App Module
 */
export class AppModule { }
