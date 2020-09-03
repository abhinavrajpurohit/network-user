/**
 |--------------------------------------------------------------
 | User Network Routing!!
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';

/*
 * User Network Route
 */
const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  }
];

/*
 * Decorator with its metadata
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

/**
 * Exporting User Network Routing
 */
export class NetworkRoutingModule { }
