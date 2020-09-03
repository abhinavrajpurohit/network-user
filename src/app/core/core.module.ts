/**
 |--------------------------------------------------------------
 | Angular Core Module with HTTP service!!
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { HttpService } from './services/http.service';

/*
* @NgModule decorator with its metadata
*/
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  providers: [HttpService],
  exports: [HeaderComponent]
})

/**
 * Exporting Core Module
 */
export class CoreModule { }
