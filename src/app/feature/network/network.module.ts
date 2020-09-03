/**
 |--------------------------------------------------------------
 | User Network Module!!
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkRoutingModule } from './network-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-list/user-profile/user-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';

/*
* @NgModule decorator with its metadata
*/
@NgModule({
  declarations: [UserListComponent, UserProfileComponent],
  imports: [
    CommonModule,
    NetworkRoutingModule,
    SharedModule
  ]
})

/**
 * Exporting User Network Module
 */
export class NetworkModule { }
