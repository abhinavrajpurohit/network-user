/**
 |--------------------------------------------------------------
 | Shared Module!!
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';

/*
* @NgModule decorator with its metadata
*/
@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule
  ],
  exports: [SpinnerComponent]
})

/**
 * Exporting Shared Module
 */
export class SharedModule { }
